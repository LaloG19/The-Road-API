import { ObjectId } from "mongodb";

export interface News{
    _id?: any;
    uid?: string;
    title: string,
    content: string,
}