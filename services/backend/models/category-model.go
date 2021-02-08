package models

import (
	"github.com/devtshape/ideaz/services/backend/inputs"
	"gorm.io/gorm"
	"time"
)


type Category struct {
	ID uint           `json:"id" gorm:"primaryKey"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`
	Color   string `json:"color" gorm:"Type:varchar(50);NOT NULL"`
	Name  string `json:"name" gorm:"Type:varchar(50);NOT NULL"`
	Img  string `json:"img" gorm:"Type:varchar(1000);"`
	Ideas []*Idea `json:"ideas" gorm:"many2many:idea_categories"`
}

//Create Category
func CreateCategory(input inputs.CategoryInput) (*Category, error) {
	var newCat Category = Category{
		Color:  input.Color,
		Name: 	input.Name,
		Img: 	input.Img,
	}
	if err := DB.Create(&newCat).Error; err != nil {
		return nil, err
	}

	return &newCat, nil
}

// List ideas designed for list view
func GetAllCategories(cats *[]Category)(error){
	if err := DB.Find(&cats).Error; err != nil {
		return err
	}

	return nil
}


//Create Category
// func UpdateCategory(input inputs.CategoryInput) (*Category, error) {
// 	var newCat Category = Category{
// 		Color:  input.Color,
// 		Name: 	input.Name,
// 		Img: 	input.Img,
// 	}
// 	if err := DB.Create(&newCat).Error; err != nil {
// 		return nil, err
// 	}

// 	return &newCat, nil
// }