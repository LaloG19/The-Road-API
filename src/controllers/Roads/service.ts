import { ObjectId } from "mongodb";
import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { Road } from "./interface";
/* import * as firebase from '../../database/firebase' */
/* const firebaseAuth = firebase.auth(); */
import { query, validationResult } from 'express-validator';

export async function getAllRoads() {
  try {
    const db = await dbConnect();
    let dbRef = db.collection("Roads");
    let response = await dbRef.find().sort({ $natural: -1 }).toArray() as [];
    return response
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function getById(RoadId: string) {
  try {

    const database = await dbConnect();
    const RoadRef = database.collection("Roads");
    const activities = database.collection('Activities');
    let Road = await RoadRef.findOne({ _id: getMongoId(RoadId) })
    
    if (!Road) {
      console.error("Error en getById, no se encontró la ruta");
      throw new Error('No se encontró la ruta')
    }
    console.log(Road)
    const activityIds = Road.activities.map((id: any) => getMongoId(id));
    const activityDetails = await activities.find({ _id: { $in: activityIds } }).toArray();
    console.log(activityDetails)
    Road.activityDetails = activityDetails;
    return Road;
  } catch (error) {
    throw error;
  }
}

export async function createRoad(data: Road) {
  try {
    const database = await dbConnect();
    const clientRef = database.collection("Roads");
    const roadData = {
      title: data.title,
      easyDescription: data.easyDescription,
      fullDescription: data.fullDescription,
      activities: data.activities,
      img: data.img,
    }
    let response = await clientRef.insertOne(roadData);

    return response.insertedId;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function updateRoadById(data: Road) {
  try {

    /* Save in MongoDB */
    const db = await dbConnect();
    let dbRef = db.collection("Roads");
    let id = data._id;
    delete data._id;

    const response = await dbRef.updateOne(
      {
        _id: getMongoId(id!)
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

export async function deleteRoadById(id: string) {
  try {
    //Getting Road informatino
    const database = await dbConnect();
    const dBRef = database.collection("Roads");
    //Checking if it exists
    let response = await dBRef.findOne({ _id: getMongoId(id) })
    await dBRef.deleteOne({ _id: getMongoId(id) });
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
