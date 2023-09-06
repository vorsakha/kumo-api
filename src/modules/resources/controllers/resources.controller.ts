import { NextFunction, Request, Response } from "express";
import ResourcesService from "@modules/resources/services/resources.service";
import PairsPresenter from "@modules/resources/presenters/pairs.presenter";

class ResourcesController {
  protected resourcesService: ResourcesService;

  constructor(resourcesService: ResourcesService) {
    this.resourcesService = resourcesService;
  }

  public async getPairs(req: Request, res: Response, next: NextFunction) {
    try {
      const symbols = await this.resourcesService.getTicketSymbols();
      const pairs = symbols.map((s) => s.pair);

      res.status(200).json(new PairsPresenter(pairs));
    } catch (error) {
      next(error);
    }
  }
}

export default ResourcesController;
