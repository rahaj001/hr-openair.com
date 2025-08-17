import express from "express";
import axios from "axios";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message, token } = req.body;

  if (!token) return res.status(400).json({ message: "Captcha fehlt." });

  // ✅ ReCaptcha prüfen
  try {
    const captchaRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${token}`
    );

    if (!captchaRes.data.success || (captchaRes.data.score && captchaRes.data.score < 0.5)) {
      return res.status(400).json({ message: "Captcha fehlgeschlagen" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Captcha Validierung fehlgeschlagen" });
  }

  // ✅ Mail senden
  try {
          const transporter = nodemailer.createTransport({
            host: "smtp.ionos.de",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SMTP_IONOS_USER,
              pass: process.env.SMTP_IONOS_PASS,
            },
          });

          await transporter.sendMail({
            from: `"${name}" <support@hr-openair.com>`,
            to: "info@hr-openair.com", // Anpassen!
            subject: "Neue Nachricht über Kontaktformular",
            text: `Von: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
          });

          res.status(200).json({ success: true, message: "Nachricht gesendet." });
        } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Fehler beim Versenden der Nachricht." });
  }
});


export default router;
