DROP KEYSPACE IF EXISTS carousel;

CREATE KEYSPACE carousel 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
AND durable_writes = 'true';

USE carousel;

CREATE TABLE photos
(
  listingId uuid,
  title varchar,
  user varchar,
  userId bigint,
  photos map<int,text>,
  PRIMARY KEY((userId), listingId)
);

COPY carousel.photos (listingId,title,user,userId,photos)
FROM '/home/ubuntu/cassUuid_data.csv' WITH DELIMITER='|' AND HEADER=TRUE AND MINBATCHSIZE=1 AND MAXBATCHSIZE=1 AND PAGESIZE=10;