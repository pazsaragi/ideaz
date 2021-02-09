package models

import (
	"gorm.io/gorm"
	"time"
)

type Idea struct {
	ID uint           `json:"id" gorm:"primaryKey"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`
	Title   string `json:"title" gorm:"Type:varchar(50);NOT NULL"`
	Content string `json:"content" gorm:"Type:varchar(300);NOT NULL"`
	Email  string `json:"email" gorm:"Type:varchar(50);"`
	Name  string `json:"name" gorm:"Type:varchar(50);"`
	Categories []Category `json:"categories" gorm:"many2many:idea_categories;"`
	Comments []Comment `json:"comments" gorm:"foreignKey:IdeaId"`
	Likes []Like `json:"likes" gorm:"foreignKey:IdeaId"`
}

type IdeaInput struct {
	Title   string `json:"title" binding:"required"`
	Content string `json:"content" binding:"required"`
	Email  string `json:"email"`
	Name  string `json:"name"`
	Categories []Category `json:"categories"`
}

func CreateIdea(input IdeaInput) (*Idea, error) {
	var newIdea Idea = Idea{
			Title:    input.Title,
			Content:  input.Content,
			Email: 	input.Email,
			Name: 	input.Name,
			Categories: input.Categories,
		}
	DB.Create(&newIdea)
	return &newIdea, nil
}

// List ideas designed for list view
func GetAllIdeas(ideas *[]Idea)(error){
	if err := DB.Preload("Categories").Preload("Comments").Preload("Likes").Find(&ideas).Error; err != nil {
		return err
	}

	return nil
}

// Idea detail view with comments ? do this at a comment level?
func GetIdea(id string, idea *Idea)(error){
	
	if err := DB.Preload("Categories").Where("id = ?", id).Find(&idea).Error; err != nil {
		return err
	}


	return nil
}

// Idea detail view with comments ? do this at a comment level?
func GetIdeasByEmail(email string, idea *[]Idea)(error){
	if err := DB.Where("email = ?", email).Find(&idea).Error; err != nil {
		return err
	}

	return nil
}

func GetIdeasByName(name string, idea *[]Idea)(error){
	if err := DB.Where("name = ?", name).Find(&idea).Error; err != nil {
		return err
	}

	return nil
}

