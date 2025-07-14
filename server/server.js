import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js"; // passe ggf. Pfad an

const app = express();

// ✅ CORS-Konfiguration
const corsOptions = {
  origin: "https://www.hr-openair.com",
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // <-- wichtig für Preflight-Anfragen

app.use(express.json()); // JSON Body Parser

// ✅ API-Routen
app.use("/api/contact", contactRoute);

// ✅ Health-Check
app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

// ✅ Serverstart
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
