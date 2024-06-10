import { Router } from 'express';
import { check } from 'express-validator';
import { getAllAnswersController, getByIdController, CreateAnswerController, UpdateAnswerController } from '../controllers/Answers/controller';

const useAnswers = Router();

useAnswers.get('/getAnswers', getAllAnswersController);
useAnswers.get('/getAnswerById/:id', getByIdController);
useAnswers.post('/createAnswer', CreateAnswerController);
useAnswers.put('/updateAnswer/:id', UpdateAnswerController);


export default useAnswers;