import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;  // Port dynamisch setzen

// CORS
app.use(cors({
  origin: [
    "https://www.hr-openair.com", // Frontend auf Render
    "http://localhost:5173"       // Frontend lokal
  ],
  methods: ["GET", "POST"],
  credentials: false
}));

app.use(express.json());
app.use("/api/contact", contactRoute);

// Frontend ausliefern
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
