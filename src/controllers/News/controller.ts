import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function getAllUsersController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllUsers();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todos los usuarios obtenidos!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllUsersController ERROR:' + err));
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

      res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario Obtenido", data: response });
  } catch (err) { 
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetByIdController ERROR:' + err));
      //next(err);
  }
}

export async function CreateUserController(
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
          let response = await service.createUser(body);
          res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario Creado con Exito!", data: response });
        }
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateUserController ' + err));
      //next(err);
    }
}
export async function UpdateUserByIdController(
    req: Request,
    res: Response
  ) {
    try {
      const body = req.body;
      console.log("User Data: ", body)
      let response = await service.updateUserById(body);
      res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario actualizado con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateUserByIdController ERROR:' + err));
      //next(err);
    }
}
export async function DeleteUserByIdController(
    req: Request,
    res: Response
  ) {
    try {
        const id = req.params.id;
        let response = await service.deleteUserById(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Usuario Eliminado con exito", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteUserByIdController ERROR:' + err));
      //next(err);
    }
}

export async function updatePasswordController(req: Request, res: Response) {
  try {
    const id = req.body.id || null;
    const password = req.body.password || null;
    let response = await service.updatePassword(password, id);
    res.status(200).send({ status: HttpStatusCode.OK, message: "Contraseña de usuario actualizada", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdatePasswordController ERROR:' + err));
      //next(err);
  }
}
