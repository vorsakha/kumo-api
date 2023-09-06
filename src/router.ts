import { Router } from "express";

import ResourcesRouter from "@modules/resources/routes";

const router = Router();

router.use("/resources", ResourcesRouter);

export default router;
