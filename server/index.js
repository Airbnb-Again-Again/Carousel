require('newrelic');
const express = require('express');
const app = express();
const db = require('../database/db');
const path = require('path');
const port = 1337;
const morgan = require('morgan');
const cors = require('cors');
const Uuid = require('cassandra-driver').types.Uuid;

// json request
app.use(express.json());

app.use(morgan());

app.use(cors());

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
});

// GET request
app.get('/user', (req, res) => {
  console.log('I GOT IT');
  const query = req.query;
  db.getId(query, (err, data) => {
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
app.post('/user', (req, res) => {
  // create new listing with address
  // comes with array/object of image urls
  const listingId = Uuid.random();
  const userId = req.query;
  const body = req.body;

  db.post(listingId, userId.userId, body, (err, data) => {
    if(err) {
      console.log(err);
      res.writeHead(500);
      res.end('Could not list house');
    } else {
      res.writeHead(201);
      res.end(JSON.stringify(listingId));
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