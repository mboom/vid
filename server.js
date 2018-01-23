'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.xhtml'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
