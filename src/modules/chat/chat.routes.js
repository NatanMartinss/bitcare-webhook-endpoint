import express from "express";
import { ChatController } from "./chat.controller.js";

const router = express.Router();
router.post("/webhook/ringer", ChatController.webhook);
router.post("/webhook/bitcare", ChatController.webhook);

export default router;