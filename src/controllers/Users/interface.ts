import { ObjectId } from "mongodb";

export interface User{
    _id?: any;
    uid?: string;
    name: string,
    lastname: String,
    email: string,
    password?: string,
    rolename: string
    creationDate?: Date;
}