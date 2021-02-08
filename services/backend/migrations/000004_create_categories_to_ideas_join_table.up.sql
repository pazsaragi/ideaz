
CREATE TABLE IF NOT EXISTS ideas_to_categories(
   idea_id bigint NOT NULL,
   category_id bigint NOT NULL,
   FOREIGN KEY (idea_id) REFERENCES ideas(idea_id), 
   FOREIGN KEY (category_id) REFERENCES categories(category_id),
   UNIQUE (idea_id, category_id)
)