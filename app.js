const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/peap', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

