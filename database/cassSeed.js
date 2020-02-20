const fs = require('fs');
var faker = require('faker');

let userid = 1;
let username = faker.internet.userName();
const listings = 10000000;

// Random number Generator
const randomizer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Cass seed
const writeCass = fs.createWriteStream('/Users/alexanderkim/Desktop/HackReactor/SDC-data/cass_data.csv');
writeCass.write('listingId,title,user,userId,photoId,url,description\n', 'utf8');

function writeTenMillionCass(writer, encoding, callback) {
  let i = listings;
  let id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let userChange = 2;

      if (i % userChange === 0) {
        userid += 1;
        username = faker.internet.userName();
        userChange = randomizer(1, 6);
      }

      if(i % 500000 === 0) {
        console.log(i);
      }

      for (let j = 0; j < randomizer(1, 20); j++) {
        const listingId = id;
        const title = faker.company.catchPhrase();
        const user = username;
        const userId = userid;
        const photoId = `${id}-${j}`;
        const url = 'https://loremflickr.com/640/480/house';
        const description = faker.lorem.sentence();
        const data = `${listingId},${title},${user},${userId},${photoId},${url},${description}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
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

writeTenMillionCass(writeCass, 'utf-8', () => {
  console.log('...Cass Done');
  writeCass.end();
});