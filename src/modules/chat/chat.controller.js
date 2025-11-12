import axios from "axios";

export class ChatController {
  static async webhook(req, res) {
    const data = req.body;

    console.log(`[Render] Evento recebido: ${data.communicationId || "sem ID"}`);

    const signature = req.headers["x-webhook-signature"];
    if (
      process.env.WHATSAPP_WEBHOOK_SECRET &&
      signature !== process.env.WHATSAPP_WEBHOOK_SECRET
    ) {
      return res.status(403).json({ error: "Invalid signature" });
    }

    if (process.env.FORWARD_URL) {
      axios
        .post(process.env.FORWARD_URL, data)
        .then(() => console.log("Evento repassado ao ambiente local ✅"))
        .catch((err) => console.error("Erro ao repassar evento:", err.message));
    }

    res.json({ ok: true });
  }
}