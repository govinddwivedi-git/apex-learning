import { inngest } from "./client";
import { eq } from "drizzle-orm";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";


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
