import { NextResponse } from "next/server";
import { courseOutlineAIModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { db } from "@/configs/db";

export async function POST(req) {
    try {
        const { courseId, topic, courseType, difficultyLevel, createdBy } = await req.json();

        // Generate Course Layout using AI
        const PROMPT = `Generate a study material for ${topic} for ${courseType} and level of difiiculty will be ${difficultyLevel} with summary of course, List of chapters along with summary for each chapter, Topic list in each chapter, all result in JSON format`;
        const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
        const aiResult = JSON.parse(aiResp.response.text());

        // Save the result along with User Input
        const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
            courseId: courseId,
            courseType: courseType,
            topic: topic,
            difficultyLevel: difficultyLevel,
            courseLayout: aiResult,
            createdBy: createdBy
        }).returning({ resp: STUDY_MATERIAL_TABLE });

        return NextResponse.json({ result: dbResult[0] });
    } catch (error) {
        console.error('Error generating course outline:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}