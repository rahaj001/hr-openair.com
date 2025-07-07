import express from "express";
import nodemailer from "nodemailer";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message, token } = req.body;

  // 1. reCAPTCHA prüfen
  const secret = process.env.CAPTCHA_SECRET_KEY;
  if (!secret || !token) {
    return res.status(400).json({ message: "Fehlende CAPTCHA-Daten." });
  }

  try {
    const captchaRes = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret,
        response: token,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { success, score } = captchaRes.data;
    if (!success || score < 0.5) {
      return res.status(403).json({ message: "reCAPTCHA-Verifizierung fehlgeschlagen." });
    }
  } catch (err) {
    console.error("Fehler bei reCAPTCHA-Überprüfung:", err);
    return res.status(500).json({ message: "Fehler bei CAPTCHA-Verifikation." });
  }

  // 2. E-Mail versenden mit Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_IONOS_SERVER,
      port: Number(process.env.SMTP_IONOS_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_IONOS_USER,
        pass: process.env.SMTP_IONOS_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_IONOS_EMAIL,
      to: process.env.ADMIN_IONOS_EMAIL,
      subject: `Neue Nachricht von ${name}`,
      html: `
        <h3>Neue Nachricht über das Kontaktformular</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong><br/>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ message: "Nachricht erfolgreich gesendet." });
  } catch (err) {
    console.error("Fehler beim Senden der E-Mail:", err);
    return res.status(500).json({ message: "E-Mail konnte nicht gesendet werden." });
  }
});

export default router;
