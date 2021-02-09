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
	var input models.IdeaInput
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
curl --location --request GET 'http://localhost:8080/v1/ideas/profile/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.test"
}'
*/
func (a IdeaHandler) GetIdeasByEmail(c *gin.Context) {
	var ideas []models.Idea

	var input inputs.FindIdeasByEmailInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := models.GetIdeasByEmail(input.Email, &ideas);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
		return
	}
	c.JSON(http.StatusOK, ideas)

}


/*
curl --location --request GET 'http://localhost:8080/v1/ideas/profile/name' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "test"
}'
*/
func (a IdeaHandler) GetIdeasByName(c *gin.Context) {
	var ideas []models.Idea

	var input inputs.FindIdeasByNameInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := models.GetIdeasByName(input.Name, &ideas);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
		return
	}
	c.JSON(http.StatusOK, ideas)
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
func (a IdeaHandler) GetIdeaFeed(c *gin.Context) {
	var ideas []models.Idea
	
	err := models.GetAllIdeas(&ideas);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
		return
	}
	c.JSON(http.StatusOK, ideas)
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
func (a IdeaHandler) GetIdeaById(c *gin.Context) {
	id := c.Params.ByName("id")
	var idea models.Idea
	
	err := models.GetIdea(id, &idea);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
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
// func (a IdeaHandler) LikeIdea(c *gin.Context) {
// 	id := c.Params.ByName("id")
	
// 	err := models.LikeIdea(id);
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
// 		return
// 	}
// 	c.JSON(http.StatusOK, "Idea liked!")
// }