const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

// GET request
module.exports.getId = function(id, cb) {
  result = {};
  db.query(`SELECT * FROM images WHERE accommodationId=${id};`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      result.imgArr = data;
      db.query(`SELECT name FROM accommodations WHERE id=${id};`, (err, data) => {
        if (err) {
          cb(err);
        } else {
          result.name = data[0].name;
          cb(null, result);
        }
      });
    }
  });
};

// POST request
module.exports.post = function(address, photos, cb) {
  result = {};
  db.query(`INSERT INTO accommodations(name) VALUES(${address});`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      id = data.id; //data.id????
      db.query(`INSERT INTO images(image, accommodationId) 
      VALUES${photos.forEach(photo => `(${photo}, ${id})`)};`, (err, data) => {
        if (err) {
          cb(err);
        } else {
          result.name = data[0].name;
          cb(null, result);
        }
      });
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
