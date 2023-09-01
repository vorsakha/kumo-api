import dotenv from "dotenv";
import { Environment, Config } from "@config/sanitized-config/types";

const optional = [""];

const getEnvironment = (): Environment => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    APP_URL: process.env.APP_URL,
    RESOURCE_API_URL: process.env.RESOURCE_API_URL,
    RESOURCE_API_KEY: process.env.RESOURCE_API_KEY,
    RESOURCE_SECRET_KEY: process.env.RESOURCE_SECRET_KEY,
  };
};

const getSanitizedConfig = (config: Environment): Config => {
  (Object.keys(config) as (keyof typeof config)[]).forEach((key) => {
    const value = config[key];
    if (value === undefined && !optional.includes(key)) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });

  return config as Config;
};

dotenv.config();

const config = getEnvironment();
const sanitizedConfig = getSanitizedConfig(config);

export { getEnvironment, getSanitizedConfig };
export default sanitizedConfig;
