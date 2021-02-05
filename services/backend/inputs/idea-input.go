package inputs

type IdeaInput struct {
	Title   string `json:"title" binding:"required"`
	Content string `json:"content" binding:"required"`
	UserId  int `json:"user_id" binding:"required"`
}

type FindByAlias struct {
	Alias  string `json:"alias" binding:"required"`
}