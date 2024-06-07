import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { User } from "./interface";
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
      let user = await userRef.findOne<any>({ uid: userId })
      return user;
    } catch (error) {
      throw error;
    }
}

export async function createActivity(data: User) {
    try {
  
      /* Save in Fireauth */
      /* const userRecord = await firebaseAuth.createUser({ 
        email: data.email,
        password: data.password,
        displayName: data.name,
        emailVerified: true,
      }) */
  
      /* Save in MongoDB */
      const database = await dbConnect();
      const clientRef = database.collection("Activities");
  
      let user: User = {
        name: data.name,
        lastname: data.lastname,
        rolename: data.rolename,
        email: data.email,
        creationDate: new Date()
      }
  
  
      let response = await clientRef.insertOne(user);
      user = {
        ...user,
        _id: response.insertedId
      }
      return response.insertedId;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  
  export async function updateActivityById(data: User) {
    try {
  
      /* Save in Fireauth */
      /* await firebaseAuth.updateUser(data.uid!, {
        email: data.email,
        displayName: data.name,
      }); */
  
      /* Save in MongoDB */
      const db = await dbConnect();
      let dbRef = db.collection("Activities");
      let id = data._id;
      delete data._id;
      let user: User = data;
  
      const response = await dbRef.updateOne(
          {
              _id: getMongoId(id)
          },
          {
              $set: user
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
  