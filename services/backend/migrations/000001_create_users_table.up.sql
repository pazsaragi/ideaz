CREATE TABLE IF NOT EXISTS users(
   user_id serial PRIMARY KEY,
   alias VARCHAR (50) UNIQUE NOT NULL,
   code VARCHAR (300) UNIQUE NOT NULL
);