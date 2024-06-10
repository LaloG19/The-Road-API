import { dbConnect } from "../../database/mongoose.database";
import { Request, Response } from 'express';
import * as service from "./service";
import { BaseError } from "../../shared/classes/base-error";
import { HttpStatusCode } from "../../shared/models/http.model";
import { ParametersError } from "../../shared/classes/api-errors";

export async function getAllQuestionsController(
  req: Request,
  res: Response
) {
  try {
    var response = await service.getAllQuestions();
    res.status(200).send({ status: HttpStatusCode.OK, message: "Todas las preguntas obtenidas!", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetAllQuestionsController ERROR:' + err));
  }
}

export async function getByIdController(
  req: Request,
  res: Response
) {
  try {
      const id = req.params.id;
      const response = await service.getById(id);

      res.status(200).send({ status: HttpStatusCode.OK, message: "Pregunta Obtenida", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetByIdController ERROR:' + err));
  }
}

export async function CreateQuestionController(
    req: Request,
    res: Response
  ) {
    try {
        const body = req.body;
        console.log("Question Data: ", body)
        if(!body) {
          throw new ParametersError("Missing params", 'CreateQuestionController', HttpStatusCode.BAD_REQUEST);
        }
        
        let response = await service.createQuestion(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Pregunta Creada con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('CreateQuestionController ' + err));
    }
}

export async function UpdateQuestionController(
    req: Request,
    res: Response
  ) 
{
    try{
        const body = req.body;
        console.log("Question Data: ", body)
        
        let response = await service.updateQuestion(body);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Pregunta Actualizada con Exito!", data: response });
    } catch (err) {
      res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('UpdateQuestionController ' + err));
    }
}

export async function DeleteQuestionController(
    req: Request,
    res: Response
  ) 
{
    try{
        const id = req.params.id;
        let response = await service.deleteQuestion(id);
        res.status(200).send({ status: HttpStatusCode.OK, message: "Pregunta Eliminada con Exito!", data: response });
    }catch(err){
        res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('DeleteQuestionController ' + err));
    }
}

export async function getQuestiosnByActivityIdController(
  req: Request,
  res: Response
) {
  try {
      const id = req.params.id;
      const response = await service.getQuestionsByActivityId(id);

      res.status(200).send({ status: HttpStatusCode.OK, message: "Preguntas Obtenidas", data: response });
  } catch (err) {
    res.status((<BaseError>err)?.httpCode || 500).send(BaseError.buildErrorMessage('GetQuestionsByActivityIdController ERROR:' + err));
  }
}