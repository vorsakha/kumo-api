import { NextFunction, Request, Response } from "express";
import ResourcesService from "@modules/resources/services/resources.service";
import PairsPresenter from "@modules/resources/presenters/pairs.presenter";
import { OK } from "http-status";
import { Intervals } from "@modules/resources/interfaces/resources.interface";

class ResourcesController {
  protected resourcesService: ResourcesService;

  constructor(resourcesService: ResourcesService) {
    this.resourcesService = resourcesService;
  }

  public async getPairs(req: Request, res: Response, next: NextFunction) {
    try {
      const symbols = await this.resourcesService.getTicketSymbols();
      const pairs = symbols.map((s) => s.pair);

      res.status(OK).json(new PairsPresenter(pairs));
    } catch (error) {
      next(error);
    }
  }

  public async getPairPrices(req: Request, res: Response, next: NextFunction) {
    try {
      const { symbol } = req.params;

      const data = await this.resourcesService.getTicketHistory(symbol, [
        Intervals.SHORT,
        Intervals.MEDIUM,
        Intervals.LONG,
      ]);

      res.status(OK).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default ResourcesController;
