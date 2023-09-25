import { Intervals } from "@modules/resources/interfaces/resources.interface";
import IchimokuService from "@modules/calculation/services/ichimoku.service";
import { createApiTicketMock } from "@/modules/support/__tests__/axios";

describe("IchimokuService", () => {
  const service = new IchimokuService();

  createApiTicketMock([Intervals.LONG]);

  describe("getIchimoku", () => {
    it("should return ichimoku data", async () => {
      const result = await service.getIchimoku(
        "BTCUSDT",
        [Intervals.LONG],
        1,
        2,
        3,
      );

      expect(result).toHaveProperty(Intervals.LONG);
      expect(result[Intervals.LONG]).toHaveProperty("tenkan");
      expect(result[Intervals.LONG]).toHaveProperty("kijun");
      expect(result[Intervals.LONG]).toHaveProperty("spanAPast");
      expect(result[Intervals.LONG]).toHaveProperty("spanBPast");
      expect(result[Intervals.LONG]).toHaveProperty("spanAFuture");
      expect(result[Intervals.LONG]).toHaveProperty("spanBFuture");
      expect(result[Intervals.LONG]).toHaveProperty("chikou");
      expect(result[Intervals.LONG]).toHaveProperty("price");
      expect(result[Intervals.LONG]).toHaveProperty("stop");
    });
  });
});
