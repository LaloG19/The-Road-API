import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { Question } from "./interface";

import { query, validationResult } from "express-validator";

export async function getAllQuestions() {
  try {
    const db = await dbConnect();
    let dbRef = db.collection("Questions");
    let response = (await dbRef.find().sort({ $natural: -1 }).toArray()) as [];
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getById(questionId: string) {
    try {
        const db = await dbConnect();
        const questionRef = db.collection("Questions");
        let question = await questionRef.findOne<any>({ qid: questionId });
        return question;
    } catch (error) {
        throw error;
    }
}

export async function createQuestion(data: Question) {
    try {
        const db = await dbConnect();
        const clientRef = db.collection("Questions");

        let question: Question = {
            question: data.question,
            respuestas: data.respuestas,
        };

        let response = await clientRef.insertOne(question);
        question = {
            ...question,
            _id: response.insertedId,
        };
        return response.insertedId;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateQuestion(data: Question) {
    try {
        const db = await dbConnect();
        let dbRef = db.collection("Questions");
        let id = data._id;
        delete data._id;
        let question: Question = data;

        const response = await dbRef.updateOne(
            {
                _id: getMongoId(id),
            },
            {
                $set: question,
            }
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function deleteQuestion(questionId: string) {
    try {
        const db = await dbConnect();
        const questionRef = db.collection("Questions");
        let response = await questionRef.deleteOne({ qid: questionId });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getQuestionsByActivityId(activityId: string) {
    try {
        const db = await dbConnect();
        const questionRef = db.collection("Questions");
        let response = await questionRef.find({ activityId: activityId }).toArray();
        return response;
    } catch (error) {
        throw error;
    }
}