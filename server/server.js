// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();
// app.use(cors());
// ✅ Erlaube CORS für deine Domain
app.use(cors({
  origin: 'https://www.hr-openair.com', // oder '*' nur zu Testzwecken
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json()); // wichtig für JSON body parsing

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

app.listen(5000, () => console.log('Server läuft auf http://localhost:5000'));
