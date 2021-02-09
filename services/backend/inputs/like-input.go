package inputs


type LikeInput struct {
	Name   string `json:"name"`
	Email  string `json:"email"`
	IdeaId  int `json:"idea_id" binding:"required"`
}