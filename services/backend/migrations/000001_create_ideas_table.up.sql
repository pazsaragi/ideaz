CREATE TABLE IF NOT EXISTS ideas(
   idea_id serial PRIMARY KEY,
   title VARCHAR (50) NOT NULL,
   content VARCHAR (1000) NOT NULL,
   email VARCHAR (50),
   name VARCHAR (50)
);