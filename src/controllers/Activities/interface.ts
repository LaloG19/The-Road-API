import { ObjectId } from "mongodb";

export interface Activity{
    _id?: any;
    title: string;
    description: string;
    preguntas: Preguntas[]
}

export interface Preguntas{
    name: string;
    options: Options[];
}

export interface Options{
    title: string,
    valid: boolean,
    index: number
}