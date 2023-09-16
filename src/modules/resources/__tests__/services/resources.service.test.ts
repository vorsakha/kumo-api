import ResourcesService from "@modules/resources/services/resources.service";
import { Intervals } from "@modules/resources/interfaces/resources.interface";

describe("getTicketSymbols", () => {
  const service = new ResourcesService();
  const options = {
    symbol: "BTCUSDT",
    interval: [Intervals.SHORT, Intervals.MEDIUM, Intervals.LONG],
  };

  beforeEach(() => {
    jest.setTimeout(10000);
  });

  describe("getPublicResources", () => {
    it("should return symbols", async () => {
      const result = await service.getTicketSymbols();

      expect(result.length).toBeGreaterThan(1);
    });
  });

  describe("getTicketPrice", () => {
    it("should return ticket prices", async () => {
      const result = await service.getTicketHistory(
        options.symbol,
        options.interval,
      );

      expect(result).toHaveProperty("1d");
      expect(result).toHaveProperty("4h");
      expect(result).toHaveProperty("1w");
    });
  });
});
