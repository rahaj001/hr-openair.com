// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // wichtig für JSON body parsing

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend läuft!");
});

app.listen(5000, () => console.log('Server läuft auf http://localhost:5000'));
