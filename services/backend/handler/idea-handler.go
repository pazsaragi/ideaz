package handler

import (
	"net/http"

	"github.com/devtshape/ideaz/services/backend/inputs"
	"github.com/devtshape/ideaz/services/backend/models"
	"github.com/gin-gonic/gin"
)

type IdeaHandler struct{}

/*
curl --location --request POST 'http://localhost:8080/v1/ideas' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Greate Ideas",
    "content": "Blah blah.....",
    "user_id": 1
}'
*/
func (a IdeaHandler) Create(c *gin.Context) {
	var input inputs.IdeaInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	idea, err := models.CreateIdea(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
		return
	}

	c.JSON(http.StatusOK, idea)
}

/*
curl --location --request POST 'http://localhost:8080/v1/ideas' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Greate Ideas",
    "content": "Blah blah.....",
    "user_id": 1
}'
*/
func (a IdeaHandler) FindIdeasByAlias(c *gin.Context) {
	id := c.Params.ByName("id")
	user, e := models.FindUserById(id)
	if e != nil {
		c.JSON(http.StatusBadRequest, "Please provide valid alias")
		return
	}
	var ideas []models.Idea
	
	err := models.FindIdeasByUserId(user.UserId, &ideas);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
		return
	}
	c.JSON(http.StatusOK, ideas)
}