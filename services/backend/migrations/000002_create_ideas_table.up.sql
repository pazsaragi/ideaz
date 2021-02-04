CREATE TABLE IF NOT EXISTS ideas(
   idea_id serial PRIMARY KEY,
   title VARCHAR (50) UNIQUE NOT NULL,
   content VARCHAR (1000) UNIQUE NOT NULL,
   user_id bigint
);

ALTER TABLE 
    ideas
ADD CONSTRAINT
    fk_idea_user_id
FOREIGN KEY (user_id) REFERENCES users;