const express = require('express');

const app = express();
const inventory = require('../data/mockpagedetail');
const db = require('../data/index');
const testListing = require('./testlisting');
const Sequelize = require('sequelize');

app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/rooms/', (req, res) => {
//   console.log(inventory);
//   res.send(inventory);
// });
app.get('/inventory/:roomId', (req, res) => {
  db.findListing(parseInt(req.params.roomId), (result)  => {
    result ? res.send(JSON.stringify(result)) : res.status(404).send('Listing not found.');
  });
});

//app.()

const server = app.listen(3004, () => console.log('Inventory service listening on port 3004!'));

module.exports = server;