const express = require('express');

const app = express();
const { details } = require('../data/mockpagedetail.js');

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/rooms/:roomId', (req, res) => {
//  result = req.params;
  res.send("oh! that's a room id");
});

const server = app.listen(3004, () => console.log('Example app listening on port 3004!'));

module.exports = server;