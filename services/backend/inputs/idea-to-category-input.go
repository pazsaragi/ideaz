package inputs

type IdeasToCategoriesInput struct {
	IdeaID  uint `gorm:"primaryKey"`
	CategoryID uint `gorm:"primaryKey"`
}