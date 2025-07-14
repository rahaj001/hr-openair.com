import express from "express";
import nodemailer from "nodemailer";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message, token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "reCAPTCHA Token fehlt" });
  }

  try {
    // ✅ reCAPTCHA verifizieren
    const captchaResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret: process.env.CAPTCHA_SECRET_KEY,
        response: token,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { success, score } = captchaResponse.data;

    if (!success || score < 0.5) {
      return res.status(403).json({ error: "reCAPTCHA-Verifizierung fehlgeschlagen" });
    }

    // ✅ Nodemailer konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_IONOS_SERVER,       // z. B. smtp.ionos.de
      port: parseInt(process.env.SMTP_IONOS_PORT || "465"),
      secure: true,                              // Port 465: secure true, Port 587: false
      auth: {
        user: process.env.SMTP_IONOS_USER,
        pass: process.env.SMTP_IONOS_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_IONOS_EMAIL,
      to: process.env.ADMIN_IONOS_EMAIL,
      subject: `Neue Nachricht von ${name}`,
      html: `
        <p><strong>Absender:</strong> ${name} (${email})</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ message: "Nachricht erfolgreich gesendet" });
  } catch (error) {
    console.error("❌ Fehler beim Versenden der Nachricht:", error.message);
    return res.status(500).json({ error: "Serverfehler beim Versenden" });
  }
});

export default router;
