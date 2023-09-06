import { Express } from "express";
import request from "supertest";

import server from "@/server";

const app: Express = server.init();

describe("Resources Routes", () => {
  describe("GET /resources/pairs", () => {
    it("should return pairs data", async () => {
      const response = await request(app).get("/resources/pairs");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("total");
    });
  });
});
