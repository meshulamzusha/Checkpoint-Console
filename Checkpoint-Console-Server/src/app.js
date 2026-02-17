import express from "express";
import cors from "cors";

import authRoute from "../src/features/auth/auth.routes.js";
import statusRoute from "../src/features/status/status.routes.js";
import messagesRoute from "../src/features/message/message.routes.js";

const app = express();

app.use(express.json(), cors());

app.use("/api/auth", authRoute);
app.use("/api/status", statusRoute);
app.use("/api/messages", messagesRoute);

export default app;
