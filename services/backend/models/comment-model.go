package models

import (
	"github.com/devtshape/ideaz/services/backend/inputs"
	"gorm.io/gorm"
	"time"
)


type Comment struct {
	ID uint           `json:"id" gorm:"primaryKey"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`
	Content   string `json:"content" gorm:"Type:varchar(300);NOT NULL"`
	Email  string `json:"email" gorm:"Type:varchar(50);"`
	Name  string `json:"name" gorm:"Type:varchar(50);"`
	IdeaId  int `json:"idea_id"`
}

//Create Comment
func CreateComment(input inputs.CommentInput) (*Comment, error) {
	var newCmt Comment = Comment{
		Content:  input.Content,
		Email: 	input.Email,
		Name: 	input.Name,
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
