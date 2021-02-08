package models

// import (
// 	"github.com/devtshape/ideaz/services/backend/inputs"
// )


// type IdeasToCategories struct {
// 	IdeaID  uint `gorm:"primaryKey"`
// 	CategoryID uint `gorm:"primaryKey"`
// }



// //Create IdeaToCategory
// func CreateIdeasToCategoriesJoin(input inputs.IdeasToCategoriesInput) (*IdeasToCategories, error) {
// 	var newITC IdeasToCategories = IdeasToCategories{
// 		CategoryID:  input.IdeaID,
// 		IdeaID: 	input.CategoryID,
// 	}
// 	if err := DB.Create(&newITC).Error; err != nil {
// 		return nil, err
// 	}

// 	return &newITC, nil
// }
