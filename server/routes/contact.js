import express from "express";
import nodemailer from "nodemailer";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message, token } = req.body;

  try {
    // ✅ reCAPTCHA-Überprüfung
    const secret = process.env.CAPTCHA_SECRET_KEY;
    const captchaResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      new URLSearchParams({
        secret,
        response: token,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = captchaResponse.data;

    if (!data.success || data.score < 0.5) {
      return res.status(403).json({ message: "reCAPTCHA-Verifizierung fehlgeschlagen." });
    }

    // ✅ Mailversand vorbereiten
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_IONOS_SERVER,
      port: parseInt(process.env.SMTP_IONOS_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_IONOS_USER,
        pass: process.env.SMTP_IONOS_PASS,
      },
    });

    // ✅ E-Mail senden
    await transporter.sendMail({
      from: process.env.ADMIN_IONOS_EMAIL,
      to: process.env.ADMIN_IONOS_EMAIL,
      subject: `Neue Nachricht über Kontaktformular: ${message}`,
      html: `
        <h3>Neue Kontaktanfrage</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong><br>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ message: "Nachricht erfolgreich gesendet." });

  } catch (error) {
    console.error("Fehler beim Senden:", error);
    return res.status(500).json({ error: "Interner Serverfehler beim Senden der Nachricht." });
  }
});

export default router;
