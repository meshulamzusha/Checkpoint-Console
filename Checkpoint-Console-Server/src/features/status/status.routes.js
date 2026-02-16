import express from "express"
import { authMiddleware } from "../../middleware/authMiddleware.js";
import controller from "./status.controller.js"

const router = express.Router()

router.get('/', authMiddleware ,controller.getStatus)

export default router