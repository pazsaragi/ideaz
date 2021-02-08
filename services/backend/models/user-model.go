package models

// import (
// 	"github.com/devtshape/ideaz/services/backend/inputs"
// 	"github.com/satori/go.uuid"
// )

// type User struct {
// 	UserId uint   `json:"user_id" gorm:"PRIMARY_KEY;AUTO_INCREMENT"`
// 	Alias  string `json:"alias" gorm:"Type:varchar(50);NOT NULL"`
// 	Code   string `json:"code" gorm:"Type:varchar(300);NOT NULL"`
// 	// Ideas    []Idea    `gorm:"foreignKey:UserRefer"`
// 	// Comments []Comment `gorm:"foreignKey:UserRefer"`
// }

// func UserExists(alias string) (bool, error) {
// 	var user User
// 	result := DB.Where("alias = ?", alias).First(&user)
// 	if result.Error != nil {
// 		return false, result.Error
// 	}

// 	return true, nil
// }

// func CreateUser(input inputs.UserInput) (*User, error) {
// 	// or error handling
// 	u1 := uuid.Must(uuid.NewV4())
// 	var newUser User = User{
// 		Alias:    input.Alias,
// 		Code:  u1.String(),
// 	}
// 	if err := DB.Create(&newUser).Error; err != nil {
// 		return nil, err
// 	}

// 	return &newUser, nil
// }

// func FindUserByCode(code string) (*User, error) {
// 	var user User;
// 	if err := DB.Where("code = ?", code).First(&user).Error; err != nil {
// 		return nil, err
// 	}

// 	return &user, nil
// }

// func FindUserByAlias(Alias string) (*User, error) {
// 	var user User;
// 	if err := DB.Where("alias = ?", Alias).First(&user).Error; err != nil {
// 		return nil, err
// 	}

// 	return &user, nil
// }

// func FindUserById(user_id string) (*User, error) {
// 	var user User;
// 	if err := DB.Where("user_id = ?", user_id).First(&user).Error; err != nil {
// 		return nil, err
// 	}

// 	return &user, nil
// }