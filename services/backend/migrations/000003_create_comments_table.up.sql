CREATE TABLE IF NOT EXISTS comments(
   comment_id serial PRIMARY KEY,
   content VARCHAR (1000) UNIQUE NOT NULL,
   user_id bigint
);

ALTER TABLE 
    comments
ADD CONSTRAINT
    fk_comment_user_id
FOREIGN KEY (user_id) REFERENCES users;