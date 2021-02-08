package inputs




type FindIdeasByEmailInput struct {
	Email  string `json:"email" binding:"required"`
}

type FindIdeasByNameInput struct {
	Name  string `json:"name" binding:"required"`
}