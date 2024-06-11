import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { News } from "./interface";
/* import * as firebase from '../../database/firebase' */
/* const firebaseAuth = firebase.auth(); */
import { query, validationResult } from 'express-validator';

export async function getAllNews() {
  try {
    const db = await dbConnect();
    let dbRef = db.collection("News");
    let response = await dbRef.find().sort({ $natural: -1 }).toArray() as [];
    return response
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function getById(NewsId: string) {
  try {

    const database = await dbConnect();
    const userRef = database.collection("News");
    let user = await userRef.findOne<any>({ _id: getMongoId(NewsId) })
    return user;
  } catch (error) {
    throw error;
  }
}

export async function createNews(data: News) {
  try {
    /* Save in MongoDB */
    const database = await dbConnect();
    const clientRef = database.collection("News");

    let news: News = {
      title: data.title,
      content: data.content,
    }

    let response = await clientRef.insertOne(news);
    news = {
      ...news,
      _id: response.insertedId
    }
    return response.insertedId;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function updateNewsById(data: News) {
  try {
    /* Save in MongoDB */
    const db = await dbConnect();
    let dbRef = db.collection("News");
    let id = data._id;
    delete data._id;

    const response = await dbRef.updateOne(
      {
        _id: getMongoId(id)
      },
      {
        $set: data
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteNewsById(id: string) {
  try {
    const database = await dbConnect();
    const dBRef = database.collection("News");
    //Checking if it exists
    let response = await dBRef.findOne({ _id: getMongoId(id) })
    //Delete in MongoDB
    await dBRef.deleteOne({ _id: getMongoId(id) });
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
