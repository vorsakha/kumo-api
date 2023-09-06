import { BAD_REQUEST } from "http-status";

export default class HttpException extends Error {
  status: number = BAD_REQUEST;

  constructor(message: string, status: number) {
    super(message);
    Object.setPrototypeOf(this, HttpException.prototype);

    this.status = status;

    Error.captureStackTrace(this);
  }
}
