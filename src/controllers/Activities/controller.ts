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
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todas las Actividades obtenidas!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllActivitiesController ERROR:' + err));
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

      res.status(200).send({ status: HttpStatusCode.OK, message: "Actividad Obtenida", data: response });
  } catch (err) { 
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetActivityByIdController ERROR:' + err));
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
          throw new ParametersError("Missing params", 'CreateActivityController', HttpStatusCode.BAD_REQUEST);
        }
        let response = await service.createActivity(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Actividad Creada con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateActivityController ' + err));
      //next(err);
    }
}
export async function UpdateActivityByIdController(
    req: Request,
    res: Response
  ) {
    try {
      const body = req.body;
      console.log("Activity Data: ", body)
      let response = await service.updateActivityById(body);
      res.status(200).send({ status: HttpStatusCode.OK, message: "Actividad actualizada con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateActivityByIdController ERROR:' + err));
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
        res.status(200).send({ status: HttpStatusCode.OK, message: "Actividad Eliminada con exito", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteActivityByIdController ERROR:' + err));
      //next(err);
    }
}

