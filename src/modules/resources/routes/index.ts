import { Router } from "express";
import pairsRouter from "@modules/resources/routes/pairs.router";

const router = Router();

router.use(pairsRouter);

export default router;
