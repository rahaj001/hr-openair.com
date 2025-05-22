import express from "express";
import nodemailer from "nodemailer";
import axios from "axios";

const router = express.Router();





router.post('/', async (req, res) => {
  const { name, email, message, token } = req.body;
  console.log(req.body); // Testausgabe
   // reCAPTCHA-Verifikation bei Google
   const secret = process.env.CAPTCHA_SECRET_KEY;
   const captchaResponse = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    new URLSearchParams({
      secret,
      response: token,
    }),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );

  const data = captchaResponse.data;

   if (!data.success || data.score < 0.5) {
     return res.status(403).json({ message: "reCAPTCHA-Verifizierung fehlgeschlagen." });
   }

   const transporter = nodemailer.createTransport({
    host:  process.env.SMTP_IONOS_SERVER,
    port:  process.env.SMTP_IONOS_PORT,
    secure: true,
    auth: {
      user:  process.env.SMTP_IONOS_USER,
      pass:  process.env.SMTP_IONOS_PASS,
    },
  });
 

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_IONOS_EMAIL,
      to:  process.env.ADMIN_IONOS_EMAIL,
      subject: 'Neue Nachricht über Kontaktformular${message}',
      html: `<p>Sender ${email} message ${message}</p>`,
       replyTo: email,  // So kann man direkt ant
    });

    res.status(200).json({ message: 'Gesendet' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fehler beim Senden' });
  }
});

export default router;


