const express = require('express');

const app = express();
const inventory = require('../data/mockpagedetail');

app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/rooms/', (req, res) => {
//   console.log(inventory);
//   res.send(inventory);
// });
app.get('/rooms/:roomId', (req, res) => {
  let result = inventory.find(function(listing) {
    return listing.id + '' === req.params.roomId;
  });
  if (result) {
    res.send(result);
  } else {
    res.status(404)
      .send('Listing not found.');
  }
});

const server = app.listen(3004, () => console.log('Inventory service listening on port 3004!'));

module.exports = server;