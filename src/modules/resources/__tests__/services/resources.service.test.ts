import ResourcesService from "@modules/resources/services/resources.service";

describe("getTicketSymbols", () => {
  const service = new ResourcesService();
  const options = { symbol: "BTCUSDT", interval: "4h", limit: 8 };

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
      const result = await service.getTicketPrice(options);

      expect(result.length).toBeGreaterThan(1);
    });
  });
});
