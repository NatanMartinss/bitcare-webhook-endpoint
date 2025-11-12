import express from "express";
import bodyParser from "body-parser";
import chatRoutes from "./modules/chat/chat.routes.js";

const app = express();
app.use(bodyParser.json());

app.get("/", (_, res) => res.json({ status: "ok", service: "bitcare-endpoint" }));

app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Webhook endpoint running on port ${PORT}`));