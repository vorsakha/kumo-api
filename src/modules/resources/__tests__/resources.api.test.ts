import { Express } from "express";
import request from "supertest";

import server from "@/server";
import { OK } from "http-status";
import { Intervals } from "@modules/resources/interfaces/resources.interface";
import {
  createApiSymbolMock,
  createApiTicketMock,
} from "@modules/support/__tests__/axios";

const app: Express = server.init();
const symbol = "BTCUSDT";

describe("Resources Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /resources/pairs", () => {
    it("should return pairs data", async () => {
      createApiSymbolMock();
      const response = await request(app).get("/resources/pairs");

      expect(response.status).toBe(OK);
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("total");
    });
  });

  describe("GET /resources/pairs/:symbol", () => {
    it("should return pairs data", async () => {
      createApiTicketMock([Intervals.SHORT, Intervals.MEDIUM, Intervals.LONG]);

      const response = await request(app).get(`/resources/pairs/${symbol}`);

      expect(response.status).toBe(OK);

      expect(response.body).toHaveProperty(Intervals.SHORT);
      expect(response.body).toHaveProperty(Intervals.MEDIUM);
      expect(response.body).toHaveProperty(Intervals.LONG);
    });
  });
});
