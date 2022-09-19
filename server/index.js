const express = require('express');
const path = require('path');

// const __dirname = path.resolve()
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/pages', '/index.vue'))
})

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}!`);
});
