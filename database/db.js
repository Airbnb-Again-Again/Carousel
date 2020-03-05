const cassandra = require('cassandra-driver');

const db = new cassandra.Client({ 
  contactPoints: ['54.244.217.214'],
  localDataCenter: 'datacenter1',
  keyspace: 'carousel'
});

// Connect to db
db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to DATABASE');
  }
});;

// GET request
module.exports.getId = function(id, cb) {
  const userId = id.userId;
  const listingId = id.listingId;
  db.execute(`SELECT * FROM photos WHERE userId=${userId} AND listingId=${listingId};`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};

// POST request
module.exports.post = function(listingId, userId, body, cb) {
  db.execute(`INSERT INTO photos(userid, listingid, photos, title, user) VALUES(${userId}, ${listingId}, ${body.photos}, '${body.title}', '${body.user}');`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log('QUERY POST', data);
      cb(null, data);
    }
  });
};

// UPDATE request
module.exports.putId = function(photoId, photoURL, cb) {
  result = {};
  db.query(`UPDATE images SET image=${photoURL} WHERE id=${photoId};`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log(`updated ${photoId}`);
      cb(data);
    }
  });
};

// DELETE request
module.exports.deleteId = function(id, cb) {
  result = {};
  db.query(`DELETE FROM accommodations WHERE id=${id};`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      db.query(`DELETE FROM images WHERE accommodationid=${id};`, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log(`deleted listing ${id}`);
          cb(data);
        }
      });
    }
  });
};

module.exports.deletePhotoId = function(photoId, cb) {
  result = {};
  db.query(`DELETE FROM images WHERE id=${photoId};`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log(`deleted ${photoID}`);
      cb(data);
    }
  });
};

// photourl: https://abc.jpg
// address: 123 abc st Poopyville

// post: INSERT INTO accommodations(name) VALUES('123 abc st Poopyville');
// post: INSERT INTO images(image, accommodationId) VALUES('https://abc.jpg', 101);
// put: UPDATE images SET image='https://abc.jpg' WHERE id=1179;
// delete: DELETE FROM images WHERE id=1178;
