import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { User } from "./interface";
/* import * as firebase from '../../database/firebase' */
/* const firebaseAuth = firebase.auth(); */
import { query, validationResult } from 'express-validator';

export async function getAllUsers() {
  try {
    const db = await dbConnect();
    let dbRef = db.collection("Users");
    let response = await dbRef.find().sort({ $natural: -1 }).toArray() as [];
    return response
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function getById(userId: string) {
  try {

    const db = await dbConnect();
    let dbRef = db.collection("Users");
    let user = await dbRef.findOne({ _id: getMongoId(userId) })
    console.log(user);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function createUser(data: User) {
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
    const clientRef = database.collection("Users");

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


export async function updateUserById(id: string, data: User) {
  try {
    const db = await dbConnect();
    let dbRef = db.collection("Users");
    const existingUser = await getById(id);
    
    if (!existingUser) {
      throw new Error('User not found');
    }
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

export async function deleteUserById(id: string) {
  try {
    //Getting user informatino
    const database = await dbConnect();
    const dBRef = database.collection("Users");
    //Checking if it exists
    let response = await dBRef.findOne({ _id: getMongoId(id) })

    //Delete in Firebase
    /* await firebaseAuth.deleteUser(response!.uid); */
    //Delete in MongoDB
    await dBRef.deleteOne({ _id: getMongoId(id) });
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updatePassword(password: string, uid: string) {
  try {
    /* await firebase.auth().updateUser(uid, { password: password }); */
  } catch (error) {
    console.log(error);
    throw error;
  }
}