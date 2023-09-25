import { Router } from "express";
import ResourcesService from "@modules/resources/services/resources.service";
import ResourcesController from "@modules/resources/controllers/resources.controller";
import { validateParams } from "@modules/support/middlewares/zod.middleware";
import { getPricesValidation } from "@modules/resources/validations/resources.validation";
import { inputErrorHandler } from "@/exceptions";

const pairsRouter = Router();

const resourcesService = new ResourcesService();
const resourcesController = new ResourcesController(resourcesService);

pairsRouter.get(
  "/pairs",
  inputErrorHandler,
  resourcesController.getPairs.bind(resourcesController),
);

pairsRouter.get(
  "/pairs/:symbol",
  validateParams(getPricesValidation),
  inputErrorHandler,
  resourcesController.getPairPrices.bind(resourcesController),
);

export default pairsRouter;
