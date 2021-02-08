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
	// if err := DB.Transaction(func(tx *gorm.DB) (error) {
		
	// 	if err := tx.Create(&newIdea).Error; err != nil {
	// 		return err
	// 	}
	// 	for _, v := range input.Categories {
	// 		var newITC IdeasToCategories = IdeasToCategories{
	// 			IdeaID: newIdea.IdeaId,
	// 			CategoryID: v,
	// 		}
	// 		tx.Create(&newITC)
	// 	}

	// 	return nil
	// }); err != nil {
	// 	return nil, err
	// }
	return &newIdea, nil
}

// func FindIdeasByUserId(UserId uint, ideas *[]Idea) (error) {
// 	if err := DB.Where("user_id = ?", UserId).Find(&ideas).Error; err != nil {
// 		return err
// 	}

// 	return nil
// }

// List ideas designed for list view
func GetAllIdeas(ideas *[]Idea)(error){
	if err := DB.Preload("Categories").Find(&ideas).Error; err != nil {
		return err
	}

	return nil
}

// Idea detail view with comments ? do this at a comment level?
// SELECT * from ideas 
// LEFT JOIN ideas_to_categories
// ON ideas.idea_id = ideas_to_categories.idea_id
// LEFT JOIN categories 
// ON ideas_to_categories.category_id = categories.category_id
// WHERE ideas.idea_id = 17

func GetIdea(id string, idea *Idea)(error){
	
	if err := DB.Preload("Categories").Where("id = ?", id).Find(&idea).Error; err != nil {
		return err
	}

	// if err := DB.Where("idea_id = ?", id).Find(&idea).Error; err != nil {
	// 	return err
	// }

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
