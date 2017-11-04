CREATE SCHEMA `blog` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS users (
  email varchar(30) NOT NULL
  name varchar(15) NOT NULL,
  password varchar(10) NOT NULL,
  PRIMARY KEY (name)
)

CREATE TABLE IF NOT EXISTS blog (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(15) NOT NULL,
  title longtext NOT NULL,
  text longtext NOT NULL,
  date varchar(100) NOT NULL,
  PRIMARY KEY (id);
  FOREIGN KEY (name)
  REFERENCES users (name)
)