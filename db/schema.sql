drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

CREATE TABLE burgers (
  item_id INTEGER(100) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100),
  devoured BOOLEAN,
  PRIMARY KEY (item_id)
);