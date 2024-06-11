import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function getAllNewsController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllNews();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todos los Novedades obtenidos!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllNewsController ERROR:' + err));
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

      res.status(200).send({ status: HttpStatusCode.OK, message: "Novedad Obtenido", data: response });
  } catch (err) { 
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetByIdController ERROR:' + err));
      //next(err);
  }
}

export async function CreateNewController(
    req: Request,
    res: Response
  ) {
    try {
        const body = req.body;
        console.log("News Data: ", body)
        if(!body) {
          throw new ParametersError("Missing params", 'CreateNewController', HttpStatusCode.BAD_REQUEST);
        }
        let response = await service.createNews(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Novedad Creado con Exito!", data: response });
       
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateNewController ' + err));
      //next(err);
    }
}
export async function updateNewsByIdController(
    req: Request,
    res: Response
  ) {
    try {
      const body = req.body;
      console.log("News Data: ", body)
      let response = await service.updateNewsById(body);
      res.status(200).send({ status: HttpStatusCode.OK, message: "Novedad actualizado con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('updateNewsByIdController ERROR:' + err));
      //next(err);
    }
}
export async function DeleteNewByIdController(
    req: Request,
    res: Response
  ) {
    try {
        const id = req.params.id;
        let response = await service.deleteNewsById(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Novedad Eliminado con exito", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteNewByIdController ERROR:' + err));
      //next(err);
    }
}
