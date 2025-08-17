import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kontakt-Route ohne Captcha
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Alle Felder sind erforderlich." });
  }

  // Test: Nachricht protokollieren
  console.log("Kontaktformular empfangen:", { name, email, message });

  // Simuliere erfolgreichen Versand
  res.status(200).json({ message: "Nachricht erfolgreich gesendet (Test ohne Captcha)" });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
