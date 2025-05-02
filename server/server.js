// server/server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Brevo SMTP Konfiguration
const transporter = nodemailer.createTransport({
  host:  process.env.SMTP_HOST,
  port:  process.env.SMTP_PORT,
  auth: {
    user:  process.env.SMTP_USER,
    pass:  process.env.SMTP_PASS,
  },
});

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body); // Testausgabe

  try {
    await transporter.sendMail({
      from: email,
      to:  process.env.TO_EMAIL,
      subject: 'Neue Nachricht über Kontaktformular',
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ message: 'Gesendet' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Fehler beim Senden' });
  }
});

app.listen(5000, () => console.log('Server läuft auf http://localhost:5000'));
