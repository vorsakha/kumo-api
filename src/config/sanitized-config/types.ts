interface Environment {
  PORT: number | undefined;
  APP_URL: string | undefined;
  RESOURCE_API_URL: string | undefined;
  RESOURCE_API_KEY: string | undefined;
  RESOURCE_SECRET_KEY: string | undefined;
}

interface Config {
  PORT: number;
  APP_URL: string;
  RESOURCE_API_URL: string;
  RESOURCE_API_KEY: string;
  RESOURCE_SECRET_KEY: string;
}

export { Environment, Config };
