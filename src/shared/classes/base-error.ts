import { HttpStatusCode } from "../models/http.model";

export class BaseError extends Error {
    public readonly log: string;
    public readonly methodName: string;
    public readonly httpCode: number;
    public readonly isOperational: boolean;

    constructor(
        log: string,
        message: string | unknown = log,
        methodName?: string,
        httpCode = HttpStatusCode.INTERNAL_SERVER,
        isOperational = true
    ) {
        super(<string>message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.log = log;
        if (methodName) this.methodName = methodName;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }

    static buildErrorMessage(error: BaseError | unknown):object{
        if(!(error instanceof BaseError)){
            return {
                status: 500,
                message: "An unexpected error ocurred",
                error: error
            }           
        }
        return {
            code: error?.httpCode || 500,
            message: error?.message || "Base error, could not define message",
            method: error?.methodName || ""
        };
    }
}