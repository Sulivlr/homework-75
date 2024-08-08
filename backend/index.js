const cors = require('cors');
const express = require('express');
const { Vigenere } = require('caesar-salad');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}/`);
});