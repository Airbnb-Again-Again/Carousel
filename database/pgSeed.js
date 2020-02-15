// PostgreSQL seed file
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const createArrayCsvWriter = require('csv-writer').createArrayCsvWriter;
var faker = require('faker');

const users = 700;
const listings = 10000;
const photos = 50000;

// Random number Generator
const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));


// User seed
const userWriter = createArrayCsvWriter({
  path: '/Users/alexanderkim/Desktop/HackReactor/SDC-data/user_data.csv',
  header: ['id', 'user']
});

const userRecords = [];

for (let i = 0; i < users; i++) {
  userRecords.push([ i, faker.internet.userName() ]);
}

userWriter.writeRecords(userRecords)
  .then(() => {
    console.log('...User Done');
  });


// Listing seed
const listingWriter = createArrayCsvWriter({
  path: '/Users/alexanderkim/Desktop/HackReactor/SDC-data/listing_data.csv',
  header: ['id', 'title', 'userId']
});

const listingRecords = [];

for (let i = 0; i < listings; i++) {
  listingRecords.push([ i, faker.company.catchPhrase(), randomizer(700) ]);
}

listingWriter.writeRecords(listingRecords)
  .then(() => {
    console.log('...Listing Done');
  });


// Photos seed
const photoWriter = createArrayCsvWriter({
  path: '/Users/alexanderkim/Desktop/HackReactor/SDC-data/photo_data.csv',
  header: ['id', 'url', 'description', 'listingId']
});

const photoRecords = [];

for (let i = 0; i < photos; i++) {
  photoRecords.push([ i, 'https://loremflickr.com/640/480/house', faker.lorem.sentence(), randomizer(listings) ]);
}

photoWriter.writeRecords(photoRecords)
  .then(() => {
    console.log('...Photos Done');
  });
