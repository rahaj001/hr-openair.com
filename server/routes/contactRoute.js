import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message, token } = req.body;

  // ReCaptcha prüfen
  const secret = process.env.VITE_API_KEY_CAPTCHA;
  const captchaRes = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`);

  if (!captchaRes.data.success || captchaRes.data.score < 0.5) {
    return res.status(400).json({ message: "Captcha fehlgeschlagen" });
  }

  // Mail senden (z.B. mit nodemailer)
  try {
    // TODO: Mailversand-Code hier
    res.json({ message: "Nachricht erfolgreich gesendet." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Fehler beim Versenden der Nachricht." });
  }
});

export default router;
