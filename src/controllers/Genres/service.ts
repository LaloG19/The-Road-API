import { dbConnect, getMongoId } from "../../database/mongoose.database";
import { Genre } from "./interface";

export async function getAllGenres() {
    try {
      const db = await dbConnect();
      let dbRef = db.collection("Genres");
      let response = await dbRef.find().sort({$natural:-1}).toArray() as [];
      return response
    } catch (error) {
      console.log(error);
      throw error
    }
  }

export async function getGenreById(userId: string) {
    try {
      
      const database = await dbConnect();
      const genreRef = database.collection("Genres");
      let genre = await genreRef.findOne<any>({ _id: getMongoId(userId) })
      return genre;
    } catch (error) {
      throw error;
    }
}

export async function createGenre(data: any) {
    try {
      const database = await dbConnect();
      const genreRef = database.collection("Genres");
  
      let fullData: any = data

      let response = await genreRef.insertOne(fullData);
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
  
  
  export async function updateGenreById(data: Genre) {
    try {
      const db = await dbConnect();
      let dbRef = db.collection("Genres");
      let id = data._id;
      delete data._id;
      console.log(id);
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
  
  export async function deleteGenreById(id: string) {
    try {
      //Getting user informatino
      const database = await dbConnect();
      const dBRef = database.collection("Genres");
      //Checking if it exists
      let response = await dBRef.findOne({_id: getMongoId(id)})

      await dBRef.deleteOne( { _id: getMongoId(id) });
      return id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  