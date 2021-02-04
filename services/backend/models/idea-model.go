package models

type Idea struct {
	IdeaId  uint   `json:"idea_id" gorm:"PRIMARY_KEY;AUTO_INCREMENT"`
	Title   string `json:"title" gorm:"Type:varchar(50);NOT NULL"`
	Content string `json:"content" gorm:"Type:varchar(300);NOT NULL"`
	UserId  string `json:"user_id" gorm:"Type:bigint;NOT NULL"`
}