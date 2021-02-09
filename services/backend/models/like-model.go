package models

import (
	"gorm.io/gorm"
	"time"
	"github.com/devtshape/ideaz/services/backend/inputs"
)

type Like struct {
	ID uint           `json:"id" gorm:"primaryKey"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" gorm:"index"`
	Name   string `json:"name" gorm:"Type:varchar(300);NOT NULL"`
	Email  string `json:"email" gorm:"Type:varchar(50);"`
	IdeaId  int `json:"idea_id" gorm:"Type:bigint;"`
}

func LikeIdea(input inputs.LikeInput) (*Like, error){
	var newLike Like = Like{
		Name:    input.Name,
		Email: 	input.Email,
		IdeaId: 	input.IdeaId,
	}
	DB.Create(&newLike)
	return &newLike, nil
}

//fucn find like by email 
func FindLikeByEmail(like *Like, email string, idea_id int) (error) {
	err := DB.Where(&Like{
		Email: email,
		IdeaId: idea_id,
	}).Find(&like).Error; if err != nil {
		return err
	}
	return nil
}
//fucn find like by name
func FindLikeByName(like *Like, name string, idea_id int) (error) {
	err := DB.Where("name = ? AND idea_id = ?", name, idea_id).Find(&like).Error; if err != nil {
		return err
	}
	return nil
}

//fucn find like by idea_id
func FindLikeByIdeaId(like *Like, idea_id int) (error) {
	err := DB.Where("idea_id = ?", idea_id).Find(&like).Error; if err != nil {
		return err
	}
	return nil
}

func CheckLikeExistsByEmail(email string, idea_id int) bool {
	var like Like
    err := DB.Raw(`SELECT * FROM likes WHERE email = ? AND idea_id = ?`, email, idea_id).Scan(&like).Error
    if err != nil {
		return true
    }
	if like.ID != 0 {
		return true
	}
	return false
}

func CheckLikeExistsByName(name string, idea_id int) bool {
	var like Like
    err := DB.Raw(`SELECT * FROM likes WHERE name = ? AND idea_id = ?`, name, idea_id).Scan(&like).Error
    if err != nil {
		return true
    }
	if like.ID != 0 {
		return true
	}
	return false;
}