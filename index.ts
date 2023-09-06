import dotenv from "dotenv";
import "reflect-metadata";
import server from "@/server";

const init = () => {
  dotenv.config();

  server.serve();
};

init();
