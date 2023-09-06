import { InternalServerError } from "@config/schema/error-response.schema";

const pairsSchema = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        type: "varchar",
        example: "BTCUSDT",
      },
    },
    total: {
      type: "integer",
      example: 1,
    },
  },
};

const get = {
  tags: ["Resources"],
  description: "Get all pairs",
  operationId: "getAllPairs",
  responses: {
    "200": {
      content: {
        "application/json": {
          schema: pairsSchema,
        },
      },
    },
    ...InternalServerError,
  },
};

export default {
  "/resources/pairs": {
    get,
  },
};
