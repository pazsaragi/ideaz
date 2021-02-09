package handler

import (
	"net/http"
	"github.com/devtshape/ideaz/services/backend/inputs"
	"github.com/devtshape/ideaz/services/backend/models"
	"github.com/gin-gonic/gin"
)

type LikeHandler struct{}

/*
curl --location --request POST 'http://localhost:8080/v1/likes/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "test",
    "email": "test@test.test",
    "idea_id": 1
}'
*/
func (a LikeHandler) Create(c *gin.Context) {
	var input inputs.LikeInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	exists := models.CheckLikeExistsByEmail(input.Email, input.IdeaId); if exists == true {
		c.JSON(http.StatusOK, gin.H{"message": "You have already liked that idea!"})
		return
	}

	ex := models.CheckLikeExistsByName(input.Name, input.IdeaId); if ex == true {
		c.JSON(http.StatusOK, gin.H{"message": "You have already liked that idea!"})
		return
	}

	like, err := models.LikeIdea(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
		return
	}

	c.JSON(http.StatusOK, like)
}
