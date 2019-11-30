/**
 * This file is created to test how build affects css styles 
 * First you need to build the project:
 * npm run build
 * Then after the build completes run this file:
 * node server.js
 * Next navigate to http://localhost:9000/ and test
 */
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);