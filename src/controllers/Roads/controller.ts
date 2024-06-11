import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function getAllRoadsController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllRoads();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todas las Rutas obtenidas!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllRoadsController ERROR:' + err));
    //next(err);
  }
}
export async function getByIdController(
  req: Request,
  res: Response
) {
  try {
      const id = req.params.id;
      const response = await service.getById(id);

      res.status(200).send({ status: HttpStatusCode.OK, message: "Ruta Obtenida", data: response });
  } catch (err) { 
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetRoadByIdController ERROR:' + err));
      //next(err);
  }
}

export async function CreateRoadController(
    req: Request,
    res: Response
  ) {
    try {
        const body = req.body;
        console.log("User Data: ", body)
        if(!body) {
          throw new ParametersError("Missing params", 'CreateRoadController', HttpStatusCode.BAD_REQUEST);
        }
        const database = await dbConnect();
        const clientRef = database.collection("users");
        const users = await clientRef.findOne({ email: body.email });
        console.log('Correo encontrado en: ',users);
        if(users){
          let badResponse = 'Ya existe una cuenta registrada con ese correo'
          res.status(200).send({ status: HttpStatusCode.ALREADY_EXISTS, message: "El usuario no fue creado", data: badResponse });
        }else{
          let response = await service.createRoad(body);
          res.status(200).send({ status: HttpStatusCode.OK, message: "Ruta Creada con Exito!", data: response });
        }
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateRoadController ' + err));
      //next(err);
    }
}
export async function UpdateRoadByIdController(
    req: Request,
    res: Response
  ) {
    try {
      const body = req.body;
      console.log("Road Data: ", body)
      let response = await service.updateRoadById(body);
      res.status(200).send({ status: HttpStatusCode.OK, message: "Ruta actualizada con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateRoadByIdController ERROR:' + err));
      //next(err);
    }
}
export async function DeleteRoadByIdController(
    req: Request,
    res: Response
  ) {
    try {
        const id = req.params.id;
        let response = await service.deleteRoadById(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Ruta Eliminada con exito", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteRoadByIdController ERROR:' + err));
      //next(err);
    }
}