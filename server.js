'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join('index.xhtml'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);