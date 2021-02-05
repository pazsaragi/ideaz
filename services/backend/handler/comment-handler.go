package handler

import (
	"net/http"

	"github.com/devtshape/ideaz/services/backend/inputs"
	"github.com/devtshape/ideaz/services/backend/models"
	"github.com/gin-gonic/gin"
)

type CommentHandler struct{}

/*
curl --location --request POST 'http://localhost:8080/v1/comments' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Greate Ideas",
    "content": "Blah blah.....",
    "user_id": 1
}'
*/
func (a CommentHandler) Create(c *gin.Context) {
	var input inputs.CommentInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cmt, err := models.CreateComment(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
		return
	}

	c.JSON(http.StatusOK, cmt)
}

/*
curl --location --request GET 'http://localhost:8080/v1/comments/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content": "I think this is great idea!",
    "user_id": 1,
    "idea_id": 1
}'
*/
func (a CommentHandler) FindCommentsByIdea(c *gin.Context) {
	id := c.Params.ByName("id")
	var cmts []models.Comment
	
	err := models.FindCommentsByIdeaId(id, &cmts);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
		return
	}
	c.JSON(http.StatusOK, cmts)
}