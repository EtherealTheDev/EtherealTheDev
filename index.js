const express = require('express');
const app = express();
const path = require('path');
const mobileDetect = require('mobile-detect');

app.get('/', (req, res) => {
  const md = new mobileDetect(req.headers['user-agent']);
  const isMobile = md.mobile() !== null;

  if (isMobile) {
    res.sendFile(path.join(__dirname, 'mobile.html'));
  } else {
    res.sendFile(path.join(__dirname, 'desktop.html'));
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
