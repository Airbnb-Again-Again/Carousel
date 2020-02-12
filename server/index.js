const express = require('express');
const app = express();
const db = require('../database/db');
const path = require('path');
const port = 1337;

// json request
app.use(express.json());

// GET request
app.get('/listing/:id', (req, res) => {
  console.log(req.params.id);
  db.getId(req.params.id, (err, data) => {
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

// POST request
app.post('/newlisting', (req, res) => {
  db.post();
  //create new listing with address
  //comes with array/object of image urls
});

// UPDATE request
app.put('/listing/:id/photo/:photoId', (req, res) => {
  db.putId();
  //Go to select photo id
  //update link to different url
});

// DELETE request
app.delete('/listing/:id/photo/:photoId', (req, res) => {
  db.deleteId();
  //go to select photo id
  //delete that photo
});



app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => {
  console.log(`aircarousel Listening on port: ${port}`);
});