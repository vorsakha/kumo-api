import { NextFunction, Request, Response } from "express";
import { UNPROCESSABLE_ENTITY } from "http-status";
import { ZodSchema, z } from "zod";

export const validateQuery = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.query);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(UNPROCESSABLE_ENTITY).send({
          message: "Erros nos dados de entrada.",
          errors: error.format(),
        });
      } else {
        next(error);
      }
    }
  };
};

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(UNPROCESSABLE_ENTITY).send({
          message: "Erros nos dados de entrada.",
          errors: error.format(),
        });
      } else {
        next(error);
      }
    }
  };
};

export const validateParams = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.params);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(UNPROCESSABLE_ENTITY).send({
          message: "Erros nos dados de entrada.",
          errors: error.format(),
        });
      } else {
        next(error);
      }
    }
  };
};
