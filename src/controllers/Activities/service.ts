import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { Activity } from "./interface";
/* import * as firebase from '../../database/firebase' */
/* const firebaseAuth = firebase.auth(); */
import { query, validationResult } from 'express-validator';

export async function getAllActivities() {
    try {
      const db = await dbConnect();
      let dbRef = db.collection("Activities");
      let response = await dbRef.find().sort({$natural:-1}).toArray() as [];
      return response
    } catch (error) {
      console.log(error);
      throw error
    }
  }

export async function getActivityById(userId: string) {
    try {
      
      const database = await dbConnect();
      const userRef = database.collection("Activities");
      let user = await userRef.findOne<any>({ _id: getMongoId(userId) })
      return user;
    } catch (error) {
      throw error;
    }
}

export async function createActivity(data: any) {
    try {
      const database = await dbConnect();
      const clientRef = database.collection("Activities");
  
      let fullData: any = data

      let response = await clientRef.insertOne(fullData);
      fullData = {
        ...fullData,
        _id: response.insertedId
      }
      return response.insertedId;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  
  export async function updateActivityById(data: any) {
    try {
      const db = await dbConnect();
      let dbRef = db.collection("Activities");
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
  
  export async function deleteActivityById(id: string) {
    try {
      //Getting user informatino
      const database = await dbConnect();
      const dBRef = database.collection("Activities");
      //Checking if it exists
      let response = await dBRef.findOne({_id: getMongoId(id)})
      
      if (!response) {
        throw new Error("Actividad no encontrada");
      }
  
      //Delete in Firebase
      /* await firebaseAuth.deleteUser(response!.uid); */ 
      //Delete in MongoDB
      await dBRef.deleteOne( { _id: getMongoId(id) });
      return id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  