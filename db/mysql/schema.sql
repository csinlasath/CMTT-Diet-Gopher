DROP DATABASE IF EXISTS diet_gopher_db;

CREATE DATABASE diet_gopher_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    emailAddress VARCHAR(100) NOT NULL,
    password VARCHAR(16) NOT NULL,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    phoneNumber INT(10),
    firebaseId VARCHAR(100),
);