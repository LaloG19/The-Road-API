import { ObjectId } from 'mongodb';
import { Answer } from '../Answers/interface';

export interface Question{
    _id?: any;
    qid?: string;
    question: string,
    respuestas: [Answer]
}