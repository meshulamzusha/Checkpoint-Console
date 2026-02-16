import express from "express";
import controller from "./message.controller.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, controller.getAll);
router.post("/", authMiddleware, controller.create);

export default router;
