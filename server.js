const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/config', (req, res) => {
  res.json({ API_TOKEN: process.env.API_TOKEN || null });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
