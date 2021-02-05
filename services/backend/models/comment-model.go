package models

import (
	"github.com/devtshape/ideaz/services/backend/inputs"
)


type Comment struct {
	CommentID uint   `json:"comment_id" gorm:"PRIMARY_KEY;AUTO_INCREMENT"`
	Content   string `json:"content" gorm:"Type:varchar(300);NOT NULL"`
	UserId  int `json:"user_id" gorm:"Type:bigint;NOT NULL"`
	IdeaId  int `json:"idea_id" gorm:"Type:bigint;NOT NULL"`
}

//Create Comment
func CreateComment(input inputs.CommentInput) (*Comment, error) {
	var newCmt Comment = Comment{
		Content:  input.Content,
		UserId: 	input.UserId,
		IdeaId: 	input.IdeaId,
	}
	if err := DB.Create(&newCmt).Error; err != nil {
		return nil, err
	}

	return &newCmt, nil
}

// Find comments by Idea
func FindCommentsByIdeaId(IdeaId string, comments *[]Comment) (error) {
	if err := DB.Where("idea_id = ?", IdeaId).Find(&comments).Error; err != nil {
		return err
	}

	return nil
}
