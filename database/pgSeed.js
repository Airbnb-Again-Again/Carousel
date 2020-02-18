// PostgreSQL seed file
const fs = require('fs');
var faker = require('faker');

const users = 5000000;
const listings = 10000000;
const photos = 100000000;

// Random number Generator
const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));


// // User seed
// const writeUsers = fs.createWriteStream('/Users/alexanderkim/Desktop/HackReactor/SDC-data/user_data.csv');
// writeUsers.write('id,user\n', 'utf8');

// function writeTenMillionUsers(writer, encoding, callback) {
//   let i = users;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const user = faker.internet.userName();
//       const data = `${id},${user}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
//   write()
// }

// writeTenMillionUsers(writeUsers, 'utf-8', () => {
//   console.log('...User Done');
//   writeUsers.end();
// });


// // Listing seed
// const writeListings = fs.createWriteStream('/Users/alexanderkim/Desktop/HackReactor/SDC-data/listing_data.csv');
// writeListings.write('id,title,userId\n', 'utf8');

// function writeTenMillionListings(writer, encoding, callback) {
//   let i = listings;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const title = faker.company.catchPhrase();
//       const userId = randomizer(users);
//       const data = `${id},${title},${userId}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
//   write()
// }

// writeTenMillionListings(writeListings, 'utf-8', () => {
//   console.log('...Listing Done');
//   writeListings.end();
// });

// Photos seed
const writePhotos = fs.createWriteStream('/Users/alexanderkim/Desktop/HackReactor/SDC-data/photos_data.csv');
writePhotos.write('id,url,description, listingId\n', 'utf8');

function writeTenMillionPhotos(writer, encoding, callback) {
  let i = photos;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const url = 'https://loremflickr.com/640/480/house';
      const description = faker.lorem.sentence();
      const listingId = randomizer(listings);
      const data = `${id},${url},${description},${listingId}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionPhotos(writePhotos, 'utf-8', () => {
  console.log('...Photos Done');
  writePhotos.end();
});
