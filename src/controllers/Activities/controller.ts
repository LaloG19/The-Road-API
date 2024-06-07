import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function GetAllActivitiesController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllActivities();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todos los usuarios obtenidos!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllUsersController ERROR:' + err));
    //next(err);
  }
}
export async function GetActivityByIdController(
  req: Request,
  res: Response
) {
  try {
      const id = req.params.id;
      const response = await service.getActivityById(id);

      res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario Obtenido", data: response });
  } catch (err) { 
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetByIdController ERROR:' + err));
      //next(err);
  }
}

export async function CreateActivityController(
    req: Request,
    res: Response
  ) {
    try {
        const body = req.body;
        console.log("User Data: ", body)
        if(!body) {
          throw new ParametersError("Missing params", 'CreateUserController', HttpStatusCode.BAD_REQUEST);
        }
        const database = await dbConnect();
        const clientRef = database.collection("users");
        const users = await clientRef.findOne({ email: body.email });
        console.log('Correo encontrado en: ',users);
        if(users){
          let badResponse = 'Ya existe una cuenta registrada con ese correo'
          res.status(200).send({ status: HttpStatusCode.ALREADY_EXISTS, message: "El usuario no fue creado", data: badResponse });
        }else{
          let response = await service.createActivity(body);
          res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario Creado con Exito!", data: response });
        }
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateUserController ' + err));
      //next(err);
    }
}
export async function UpdateActivityByIdController(
    req: Request,
    res: Response
  ) {
    try {
      const body = req.body;
      console.log("User Data: ", body)
      let response = await service.updateActivityById(body);
      res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario actualizado con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateUserByIdController ERROR:' + err));
      //next(err);
    }
}
export async function DeleteActivityByIdController(
    req: Request,
    res: Response
  ) {
    try {
        const id = req.params.id;
        let response = await service.deleteActivityById(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario Eliminado con exito", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteUserByIdController ERROR:' + err));
      //next(err);
    }
}

