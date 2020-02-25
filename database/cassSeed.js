const fs = require('fs');
var faker = require('faker');
const Uuid = require('cassandra-driver').types.Uuid;

const listings = 10000000;

// Random number Generator
const randomizer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Cass seed
const writeCass = fs.createWriteStream('/Users/alexanderkim/Desktop/HackReactor/SDC-data/cassUuid_data.csv');
writeCass.write('listingId|title|user|userId|photos\n', 'utf8');

function writeTenMillionCass(writer, encoding, callback) {
  let i = listings;
  let id = 0;
  let userChange = 2;
  let userid = 1;
  let username = faker.internet.userName();

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      
      if (i % userChange === 0) {
        userid += 1;
        username = faker.internet.userName();
        userChange = randomizer(1, 6);
      }
      
      if(i % 500000 === 0) {
        console.log(i);
      }

      let listingId = Uuid.random();
      let title = faker.company.catchPhrase();
      let user = username;
      let userId = userid;
      let photos =[];
      
      for (let j = 0; j < randomizer(1, 20); j++) {
        const url = 'https://loremflickr.com/640/480/house';
        const description = faker.lorem.sentence();
        photos.push(`'${j}':'${url}, ${description}'`);
      }
      let joined = photos.join(',');
      const data = `${listingId}|${title}|${user}|${userId}|{${joined}}\n`;
      photos = [];
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

writeTenMillionCass(writeCass, 'utf-8', () => {
  console.log('...Cass Done');
  writeCass.end();
});