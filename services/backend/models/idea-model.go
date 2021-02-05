package models

import (
	"github.com/devtshape/ideaz/services/backend/inputs"
)

type Idea struct {
	IdeaId  uint   `json:"idea_id" gorm:"PRIMARY_KEY;AUTO_INCREMENT"`
	Title   string `json:"title" gorm:"Type:varchar(50);NOT NULL"`
	Content string `json:"content" gorm:"Type:varchar(300);NOT NULL"`
	UserId  int `json:"user_id" gorm:"Type:bigint;NOT NULL"`
}


func CreateIdea(input inputs.IdeaInput) (*Idea, error) {
	var newIdea Idea = Idea{
		Title:    input.Title,
		Content:  input.Content,
		UserId: 	input.UserId,
	}
	if err := DB.Create(&newIdea).Error; err != nil {
		return nil, err
	}

	return &newIdea, nil
}

func FindIdeasByUserId(UserId uint, ideas *[]Idea) (error) {
	if err := DB.Where("user_id = ?", UserId).Find(&ideas).Error; err != nil {
		return err
	}

	return nil
}

// List ideas designed for list view
// func ListIdeas()(error){
// 	return
// }

// Idea detail view with comments ? do this at a comment level?
// func GetIdea()(error){
// 	return
// }
