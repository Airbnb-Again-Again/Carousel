const express = require('express');
const app = express();
const db = require('../database/db');
const path = require('path');
const port = 1337;

// json request
app.use(express.json());

// GET request
app.get('/listing/:listingId/photos', (req, res) => {
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
app.post('/user/:userId/newlisting', (req, res) => {
  // create new listing with address
  // comes with array/object of image urls
  const address = req.data.address;
  // array of links
  const photos = req.data.photos;

  db.post(address, photos, (err, data) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.end('Could not list house');
    } else {
      res.writeHead(201);
      res.end(JSON.stringify(data));
    }
  });
});

// UPDATE request
app.patch('user/:userId/listing/:listingId/photo/:photoId', (req, res) => {
  // Go to select photo id
  // update link to different url
  const photoId = req.params.photoId;
  const photoURL = req.data.photoURL;

  db.putId(photoId, photoURL, (err, data) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.end('Could not UPDATE picture');
    } else {
      res.writeHead(201);
      res.end(JSON.stringify(data));
    }
  });
});

// DELETE request
app.delete('user/:userId/listing/:listingId', (req, res) => {
  // go to select photo id
  // delete that photo
  const photoId = req.params.id;

  db.deleteId(id, (err, data) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.end('Could not DELETE listing');
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(data));
    }
  });
});

app.delete('user/:userId/listing/:listingId/photo/:photoId', (req, res) => {
  // go to select photo id
  // delete that photo
  const photoId = req.params.photoId;
  const photoURL = req.data.photoURL;

  db.deletePhotoId(photoId, photoURL, (err, data) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.end('Could not DELETE picture');
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(data));
    }
  });
});



app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => {
  console.log(`aircarousel Listening on port: ${port}`);
});