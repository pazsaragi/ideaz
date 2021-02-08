package inputs

type CategoryInput struct {
	Color   string `json:"color" binding:"required"`
	Name   string `json:"name" binding:"required"`
	Img  string `json:"img"`
}