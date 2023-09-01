import dotenv from "dotenv";
import "reflect-metadata";
import server from "@/server";

const init = async () => {
  dotenv.config();

  server.serve();
};

init()
  .then()
  .catch((error) => {
    throw error;
  });
