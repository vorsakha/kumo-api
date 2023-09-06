import { resourcesSchema } from "@modules/resources/schemas/index.schema";
import env from "@config/sanitized-config";

export default {
  openapi: "3.0.0",
  info: {
    version: "0.0.1",
    title: "Kumo API",
  },
  servers: [
    {
      url: env.APP_URL,
      description: "Server",
    },
  ],
  components: {
    securitySchemes: {
      Token: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      Token: [],
    },
  ],
  paths: {
    ...resourcesSchema,
  },
};
