package inputs

type CommentInput struct {
	Content   string `json:"content" binding:"required"`
	UserId  int `json:"user_id" binding:"required"`
	IdeaId  int `json:"idea_id" binding:"required"`
}

type FindByIdea struct {
	IdeaId  string `json:"idea_id" binding:"required"`
}