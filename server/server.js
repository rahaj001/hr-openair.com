import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// ✅ CORS korrekt konfigurieren
app.use(cors({
  origin: "https://www.hr-openair..onrender.com",
  methods: ["GET", "POST"],
  credentials: false
}));

app.use(express.json());

// ✅ Kontakt-Route einbinden
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
