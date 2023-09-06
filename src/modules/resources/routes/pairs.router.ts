import { Router } from "express";
import ResourcesService from "@modules/resources/services/resources.service";
import ResourcesController from "@modules/resources/controllers/resources.controller";

const pairsRouter = Router();

const resourcesService = new ResourcesService();
const resourcesController = new ResourcesController(resourcesService);

pairsRouter.get(
  "/pairs",
  resourcesController.getPairs.bind(resourcesController),
);

export default pairsRouter;
