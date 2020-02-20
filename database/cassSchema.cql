DROP KEYSPACE IF EXISTS carousel;

CREATE KEYSPACE carousel 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
AND durable_writes = 'true';

USE carousel;

CREATE TABLE photosmap
(
  listingId bigint,
  title varchar,
  user varchar,
  userId bigint,
  photos map<int,text>,
  PRIMARY KEY((userId), listingId)
);

COPY carousel.photosmap (listingId,title,user,userId,photos)
FROM '/Users/alexanderkim/Desktop/HackReactor/SDC-data/cassMap_data.csv' WITH DELIMITER='|' AND HEADER=TRUE;