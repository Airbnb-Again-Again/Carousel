const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const createArrayCsvWriter = require('csv-writer').createArrayCsvWriter;
var faker = require('faker');

const user = 700;
const listings = 1000;
const photos = 50000;

// Random number Generator
const randomizer = (max) => Math.floor(Math.random() * Math.floor(max));

// Cass seed
const cassWriter = createArrayCsvWriter({
  path: '/Users/alexanderkim/Desktop/HackReactor/SDC-data/cass_data.csv',
  header: ['listingId', 'title', 'user', 'userId', 'photoId', 'url', 'description']
});

const cassRecords =[];

for (let i = 0; i < photos; i++) {
  cassRecords.push([ 
    randomizer(listings),
    faker.lorem.sentence(),
    faker.internet.userName(),
    randomizer(user),
    i,
    'https://loremflickr.com/640/480/house',
    faker.lorem.sentence(),
  ]);
}

cassWriter.writeRecords(cassRecords)
  .then(() => {
    console.log('...Cass Data Done');
  });
