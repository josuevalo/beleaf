DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255) NOT NULL
  quote VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);