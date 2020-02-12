const express = require('express');
const app = express();
const db = require('../database/db');
const path = require('path');
const port = 1337;

app.get('/api/:id', (req, res) => {
  console.log(req.params.id);
  db.readId(req.params.id, (err, data) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.end('Server error');
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(data));
    }
  })
});



app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => {
  console.log(`aircarousel Listening on port: ${port}`);
});