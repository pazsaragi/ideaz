CREATE TABLE IF NOT EXISTS comments(
   comment_id serial PRIMARY KEY,
   content VARCHAR (1000) NOT NULL,
   email VARCHAR (50),
   name VARCHAR (50),
   idea_id bigint
);

ALTER TABLE
    comments
ADD CONSTRAINT
    fk_comment_idea_id
FOREIGN KEY (idea_id) REFERENCES ideas;