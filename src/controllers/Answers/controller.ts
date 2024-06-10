import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function getAllAnswersController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllAnswers();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todas las respuestas obtenidas!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllAnswersController ERROR:' + err));
  }
}

export async function getByIdController(
  req: Request,
  res: Response
) {
  try {
      const id = req.params.id;
      const response = await service.getById(id);

      res.status(200).send({ status: HttpStatusCode.OK, message: "Respuesta Obtenida", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetByIdController ERROR:' + err));
  }
}

export async function CreateAnswerController(
    req: Request,
    res: Response
  ) {
    try {
        const body = req.body;
        console.log("Answer Data: ", body)
        if(!body) {
          throw new ParametersError("Missing params", 'CreateAnswerController', HttpStatusCode.BAD_REQUEST);
        }
        let response = await service.createAnswer(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Respuesta Creada con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateAnswerController ' + err));
    }
}

export async function UpdateAnswerController(
    req: Request,
    res: Response
  ) 
{
    try{
        const body = req.body;
        console.log("Answer Data: ", body)
        
        let response = await service.updateAnswer(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Respuesta Actualizada con Exito!", data: response });
    }catch(err){
        res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateAnswerController ' + err));
    }
}

export async function DeleteAnswerController(
    req: Request,
    res: Response
  ) 
{
    try{
        const id = req.params.id;
        let response = await service.deleteAnswer(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Respuesta Eliminada con Exito!", data: response });
    }catch(err){
        res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteAnswerController ' + err));
    }
}

export async function getAnswersByQuestionIdController(
  req: Request,
  res: Response
) {
  try {
    const id = req.params.id;
    const response = await service.getAnswersByQuestionId(id);

    res.status(200).send({ status: HttpStatusCode.OK, message: "Respuestas Obtenidas", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAnswersByQuestionIdController ERROR:' + err));
  }
}