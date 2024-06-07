import { Db, MongoClient, ObjectId } from "mongodb";
var api_url = process.env.DB_URI || 'mongodb+srv://admin:admin@theroadcluster.pghx5dg.mongodb.net/';

const client = new MongoClient(api_url);
let roadConnection: Db;

export async function dbConnect() {
  try {
    if (!roadConnection) {
      await client.connect();
      roadConnection = client.db("TheRoadDB");
      console.log("Conexión a Base de datos");
      return roadConnection;
    }
    return roadConnection;
  } catch (error) {
    console.log('Error al conectar a BD de Comtecsa');
    throw error;
  }
}

export function getMongoId(documentId: string) {
  try {
    return new ObjectId(documentId);
  } catch (error) {}
}
