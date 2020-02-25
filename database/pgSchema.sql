DROP DATABASE IF EXISTS carousel;

CREATE DATABASE carousel;

\c carousel;

CREATE TABLE users (
id INTEGER NOT NULL PRIMARY KEY,
user_name VARCHAR(256)
);

CREATE TABLE listings (
id INTEGER NOT NULL PRIMARY KEY,
title VARCHAR(256) NOT NULL,
userId INTEGER NOT NULL
);

CREATE TABLE photos (
id INTEGER NOT NULL PRIMARY KEY,
photo_url VARCHAR(256) NOT NULL,
caption VARCHAR(256),
listingId INTEGER NOT NULL
);

-- Copy CSV file into tables
COPY users(id,user_name)
FROM '/Users/alexanderkim/Desktop/HackReactor/SDC-data/user_data.csv' DELIMITER ',' CSV HEADER;

COPY listings(id,title,userId)
FROM '/Users/alexanderkim/Desktop/HackReactor/SDC-data/listing_data.csv' DELIMITER ',' CSV HEADER;

COPY photos(id,photo_url,caption,listingId)
FROM '/Users/alexanderkim/Desktop/HackReactor/SDC-data/photos_data.csv' DELIMITER ',' CSV HEADER;