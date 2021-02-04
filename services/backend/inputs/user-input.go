package inputs

type UserInput struct {
	Alias string `json:"alias" binding:"required"`
}

type LoginInput struct {
	Code string `json:"code" binding:"required"`
}
