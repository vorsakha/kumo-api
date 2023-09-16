import { Express } from "express";
import request from "supertest";

import server from "@/server";
import { OK } from "http-status";
import { Intervals } from "@modules/resources/interfaces/resources.interface";

const app: Express = server.init();

describe("Resources Routes", () => {
  describe("GET /resources/pairs", () => {
    it("should return pairs data", async () => {
      const response = await request(app).get("/resources/pairs");

      expect(response.status).toBe(OK);
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("total");
    });
  });

  describe("GET /resources/pairs/:symbols", () => {
    it("should return pairs data", async () => {
      const response = await request(app).get("/resources/pairs/BTCUSDT");

      expect(response.status).toBe(OK);

      expect(response.body).toHaveProperty(Intervals.SHORT);
      expect(response.body).toHaveProperty(Intervals.MEDIUM);
      expect(response.body).toHaveProperty(Intervals.LONG);
    });
  });
});
