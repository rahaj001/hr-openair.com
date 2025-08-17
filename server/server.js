import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS für Frontend + lokal
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Nicht erlaubter Origin: " + origin));
    }
  },
  methods: ["GET","POST"],
  credentials: true
}));

app.use(express.json());
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
