import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ⚡ Mail-Transporter konfigurieren
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,      // z.B. smtp.gmail.com
  port: process.env.SMTP_PORT || 587,
  secure: false,                     // true für 465, false für andere Ports
  auth: {
    user: process.env.SMTP_USER,     // deine E-Mail-Adresse
    pass: process.env.SMTP_PASS,     // dein E-Mail-Passwort oder App-Passwort
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Alle Felder sind erforderlich." });
  }

  try {
    // ⚡ Mail senden
   await transporter.sendMail({
     from: `"HR OpenAir Kontaktformular" <kontakt@hr-openair.com>`, // fester Absender
     to: process.env.CONTACT_RECEIVER,                             // Empfänger
     subject: `Neue Nachricht von ${name}`,
     text: `Von: ${name} <${email}>\n\n${message}`,               // Nutzer-Email im Text
     html: `<p>${message}</p><p>Von: ${name} &lt;${email}&gt;</p>`,
   });

    res.status(200).json({ message: "Nachricht erfolgreich gesendet!" });
  } catch (err) {
    console.error("Fehler beim Mailversand:", err);
    res.status(500).json({ message: "Fehler beim Senden der Nachricht." });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
