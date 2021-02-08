package handler

import (
	"net/http"

	"github.com/devtshape/ideaz/services/backend/inputs"
	"github.com/devtshape/ideaz/services/backend/models"
	"github.com/gin-gonic/gin"
)

type CategoryHandler struct{}

/*
curl --location --request POST 'http://localhost:8080/v1/categories/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Tech",
    "color": "brand.prim"
}'
*/
func (a CategoryHandler) Create(c *gin.Context) {
	var input inputs.CategoryInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cat, err := models.CreateCategory(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
		return
	}

	c.JSON(http.StatusOK, cat)
}


/*
curl --location --request GET 'http://localhost:8080/v1/categories/' \
--data-raw ''
*/
func (a CategoryHandler) GetAllCategories(c *gin.Context) {
	var cats []models.Category
	
	err := models.GetAllCategories(&cats);
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Whoops! Something went wrong!")
		return
	}
	c.JSON(http.StatusOK, cats)
}