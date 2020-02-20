DROP KEYSPACE IF EXISTS carousel;

CREATE KEYSPACE carousel 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
AND durable_writes = 'true';

USE carousel;

CREATE TABLE photos
(
  listingId bigint,
  title varchar,
  user varchar,
  userId bigint,
  photoId varchar,
  photo varchar,
  caption varchar,
  PRIMARY KEY((userId), listingId, photoId)
);


COPY carousel.photos (listingId,title,user,userId,photoId,photo,caption)
FROM '/Users/alexanderkim/Desktop/HackReactor/SDC-data/cass_data.csv' WITH DELIMITER=',' AND HEADER=TRUE;