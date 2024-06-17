import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function GetAllGenresController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllGenres();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todos los Generos obtenidas!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllGenresController ERROR:' + err));
    //next(err);
  }
}
export async function GetGenreByIdController(
  req: Request,
  res: Response
) {
  try {
      const id = req.params.id;
      const response = await service.getGenreById(id);

      res.status(200).send({ status: HttpStatusCode.OK, message: "Genero Obtenido", data: response });
  } catch (err) { 
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetGenreByIdController ERROR:' + err));
      //next(err);
  }
}

export async function CreateGenreController(
    req: Request,
    res: Response
  ) {
    try {
        const body = req.body;
        console.log("User Data: ", body)
        if(!body) {
          throw new ParametersError("Missing params", 'CreateGenreController', HttpStatusCode.BAD_REQUEST);
        }
        let response = await service.createGenre(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Genero Creado con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateGenreController ' + err));
      //next(err);
    }
}
export async function UpdateGenreByIdController(
    req: Request,
    res: Response
  ) {
    try {
      const body = req.body;
      console.log("Genre Data: ", body)
      let response = await service.updateGenreById(body);
      res.status(200).send({ status: HttpStatusCode.OK, message: "Genero Actualizado con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateGenreByIdController ERROR:' + err));
      //next(err);
    }
}
export async function DeleteGenreByIdController(
    req: Request,
    res: Response
  ) {
    try {
        const id = req.params.id;
        let response = await service.deleteGenreById(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Genero Eliminado con exito", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteGenreByIdController ERROR:' + err));
      //next(err);
    }
}

