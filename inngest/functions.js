import { inngest } from "./client";
import { eq } from "drizzle-orm";
import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE, USER_TABLE } from "@/configs/schema";
import { generateNotesAIModel, GenerateQuizAiModel, GenerateStudyTypeContentAiModel } from "@/configs/AiModel";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-new-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    // Get Event data
    const { user } = event.data;
    const result = await step.run(
      "Check User and Create New if Not in DB",
      async () => {
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
        console.log(result);
        if (result.length === 0) {
          const userResp = await db
            .insert(USER_TABLE)
            .values({
              name: user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });
            return userResp;

          console.log(userResp);
        }
        return result;
      }
    )
    return 'Success';
  }
  // Step to send Welcome Email

  // Step to send Email Notification After 3 Days Once user join it
);


export const GenerateNotes = inngest.createFunction(
  {id : 'generate-course'},
  {event : 'notes.generate'},
  async({event,step})=>{
    const {course} = event.data;

    // Generate Notes for each chapter
    const notesResult = await step.run('Generate Chapter Notes', async()=>{
     const Chapters = course?.courseLayout?.chapters;
     let index = 0;
     Chapters.forEach(async(chapter) => {
      const PROMPT = `Generate exam material detailed content for ech chapter, Make sure to include all topic in the content, make sure to give content in HTML format (Do not Add HTML, Head,Body,title tag), The chapters : ${JSON.stringify(chapter)}. Make sure to provide answer to all the questions in content.`;
      const result = await generateNotesAIModel.sendMessage(PROMPT);
      const aiResp = result.response.text();
      await db.insert(CHAPTER_NOTES_TABLE).values({
        chapterId: index,
        courseId: course?.courseId,
        notes: aiResp
      })
     index = index + 1;
     
    })
    return 'Completed';

    })

    // Update the status of the course
    const updateCourseStatusResult = await step.run('Update Course Status to ready', async() => {
      const result = await db.update(STUDY_MATERIAL_TABLE)
      .set({
        status: 'Ready'
      })
      .where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId))
      return 'Success';
    })

  }
);


export const GenerateStudyTypeContent = inngest.createFunction(
  {id:'Generate Study Type Content'},
  {event:'studyType.content'},

  async({event,step})=>{
    const {studyType, prompt, courseId, recordId} = event.data;
    const AiResult = await step.run('Generating Flashcard using AI', async()=>{
      const result = 
      studyType == 'flashcard' ? 
      await GenerateStudyTypeContentAiModel.sendMessage(prompt) : 
      await GenerateQuizAiModel.sendMessage(prompt);
     const AIResult = JSON.parse(result.response.text());
     return AIResult;
    })
    const DbResult = await step.run('Save Result to DB', async()=>{
      const result = await db.update(STUDY_TYPE_CONTENT_TABLE).set({
        content: AiResult,
        status: 'Ready'
      }).where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));

      return 'Success - Data Inserted';
    })
  }
)
