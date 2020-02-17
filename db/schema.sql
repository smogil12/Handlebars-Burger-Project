drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

CREATE TABLE burgers (
  id INTEGER(100) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100),
  devoured BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);