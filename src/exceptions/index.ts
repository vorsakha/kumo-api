import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { UNPROCESSABLE_ENTITY } from "http-status";

const inputErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res
      .status(UNPROCESSABLE_ENTITY)
      .json({ message: "Error sending data", errors: errors.array() });
  } else {
    next();
  }
};

export { inputErrorHandler };
