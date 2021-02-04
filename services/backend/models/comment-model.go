package models

type Comment struct {
	CommentID uint   `json:"comment_id" gorm:"PRIMARY_KEY;AUTO_INCREMENT"`
	Title     string `json:"title" gorm:"Type:varchar(50);NOT NULL"`
	Content   string `json:"content" gorm:"Type:varchar(300);NOT NULL"`
}