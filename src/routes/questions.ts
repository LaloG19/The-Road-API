import { Router } from 'express';
import { check } from 'express-validator';
import { } from '../controllers/Questions/controller';

const useRouter = Router();

useRouter.get('/getQuestions', getAllQuestionsController);

export default useRouter;