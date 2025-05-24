const express = require('express');
const port = 8000;
const app = express();
// const cors = require('cors');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});