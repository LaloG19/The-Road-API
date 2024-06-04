import { BaseError } from './base-error';
import { HttpStatusCode } from '../models/http.model';

export class ParametersError extends BaseError {
    constructor(message: string, methodName = '', httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true) {
        super('', message, methodName, httpCode, isOperational);
    }
}


