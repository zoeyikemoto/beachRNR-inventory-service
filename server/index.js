const express = require('express');

const app = express();
const inventory = require('../data/mockpagedetail');
const db = require('../data/index');
const datagen = require('../data/faker/datagen');
const testListing = require('./testlisting');
const Sequelize = require('sequelize');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/rooms/', (req, res) => {
//   console.log(inventory);
//   res.send(inventory);
// });
app.get('/inventory/:roomId', (req, res) => {
  console.log('looking for room ID ' + req.params.roomId );
  db.findListing(parseInt(req.params.roomId), (result) => {
    result ? res.send(JSON.stringify(result)) : res.status(404).send('Listing not found.');
  });
});

app.get('/datagen/:quantity', (req, res) => {
  db.bulkAdd(parseInt(req.params.quantity), (result) => {
    result ? res.send(JSON.stringify(result)) : res.status(404).send('Listing not found.');
  });
});

// app.get('/trimto200k', (req, res) => {
//   db.trimTo20k((result) => {
//     result ? res.send(JSON.stringify(result)) : res.status(404).send('Listing not found.');
//   });
// });

//app.()

const server = app.listen(3004, () => console.log('Inventory service listening on port 3004!'));

module.exports = server;