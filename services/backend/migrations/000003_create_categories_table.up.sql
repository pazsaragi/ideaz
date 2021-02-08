CREATE TABLE IF NOT EXISTS categories(
   category_id serial PRIMARY KEY,
   color VARCHAR (50) NOT NULL,
   name VARCHAR (50) NOT NULL,
   img VARCHAR (1000)
);