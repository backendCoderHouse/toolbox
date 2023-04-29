import express from "express";
const router = express.Router();

import * as controller from "../api/files.js";

router.get("/files/data", controller.getData);
router.get("/files/list", controller.getFilesList);

export default router;