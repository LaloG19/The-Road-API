import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { Answer } from "./interface";

import { query, validationResult } from "express-validator";

export async function getAllAnswers() {
  try {
    const db = await dbConnect();
    let dbRef = db.collection("Answers");
    let response = (await dbRef.find().sort({ $natural: -1 }).toArray()) as [];
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getById(answerId: string) {
    try {
        const db = await dbConnect();
        const answerRef = db.collection("Answers");
        let answer = await answerRef.findOne<any>({ aid: answerId });
        return answer;
    } catch (error) {
        throw error;
    }
}

export async function createAnswer(data: Answer) {
    try {
        const db = await dbConnect();
        const clientRef = db.collection("Answers");

        let answer: Answer = {
            answer: data.answer,
            correct: data.correct,
        };

        let response = await clientRef.insertOne(answer);
        answer = {
            ...answer,
            _id: response.insertedId,
        };
        return response.insertedId;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateAnswer(data: Answer) {
    try {
        const db = await dbConnect();
        let dbRef = db.collection("Answers");
        let id = data._id;
        delete data._id;
        let answer: Answer = data;

        const response = await dbRef.updateOne(
            {
                _id: getMongoId(id),
            },
            {
                $set: answer,
            }
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteAnswer(id: string) {
    try{
        const db = await dbConnect();
        const dbRef = db.collection("Answers");
        let response = await dbRef.deleteOne({ _id: getMongoId(id) });
        
        await dbRef.deleteOne({ _id: getMongoId(id) });
        return id;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAnswersByQuestionId(questionId: string) {
    try {
        const db = await dbConnect();
        const answerRef = db.collection("Answers");
        let response = await answerRef.find({ qid: questionId }).toArray();
        return response;
    }catch(error){
        throw error;
    }
}