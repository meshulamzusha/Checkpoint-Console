import express from "express";
import { login } from "./auth.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/login",
  [
    body("username").isString().notEmpty(),
    body("password").isString().isLength({ min: 4 }),
  ],
  login,
);

export default router;
