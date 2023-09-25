import ResourcesService from "@modules/resources/services/resources.service";
import { Intervals } from "@modules/resources/interfaces/resources.interface";
import {
  createApiSymbolMock,
  createApiTicketMock,
} from "@modules/support/__tests__/axios";

describe("ResourcesService", () => {
  const service = new ResourcesService();
  const options = {
    symbol: "BTCUSDT",
    interval: [Intervals.LONG],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getPublicResources", () => {
    it("should return symbols", async () => {
      createApiSymbolMock();

      const result = await service.getTicketSymbols();

      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("getTicketPrice", () => {
    it("should return ticket prices", async () => {
      createApiTicketMock(options.interval);

      const result = await service.getTicketHistory(
        options.symbol,
        options.interval,
      );

      expect(result).toHaveProperty(Intervals.LONG);
    });
  });
});
