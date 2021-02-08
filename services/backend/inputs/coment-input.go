package inputs

type CommentInput struct {
	Content   string `json:"content" binding:"required"`
	Email  string `json:"email"`
	Name  string `json:"name"`
	IdeaId  int `json:"idea_id" binding:"required"`
}

type FindByIdea struct {
	IdeaId  string `json:"idea_id" binding:"required"`
}