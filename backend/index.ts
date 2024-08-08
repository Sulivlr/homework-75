import express from "express";
import cors from 'cors';
import v from "vigenere-encoder";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.post("/encode", (req, res) => {
  const {password, message} = req.body;
  const encoded = v.encode(password, message);
  res.json(encoded)
});

app.post("/decode", (req, res) => {
  const {password, message} = req.body;
  const decoded = v.decode(password, message);
  res.json(decoded)
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});