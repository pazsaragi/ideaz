package handler

import (
	"net/http"

	"github.com/devtshape/ideaz/services/backend/inputs"
	"github.com/devtshape/ideaz/services/backend/models"
	"github.com/gin-gonic/gin"
	"strings"
)

type UserHandler struct{}

/*
curl --location --request POST 'localhost:8080/v1/user/create' \
--header 'Content-type: application/json' \
--data '{"alias":"test"}'
*/
func (a UserHandler) Create(c *gin.Context) {
	var input inputs.UserInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	isEmail := strings.ContainsAny(input.Alias, "@")
	if isEmail {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Alias must not be an email address!"})
		return
	}

	userExists, err := models.UserExists(input.Alias)
	if userExists == true {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"error": "An account already exists with that email"})
		return
	}

	user, err := models.CreateUser(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Something went wrong"})
		return
	}

	c.JSON(http.StatusOK, user)
}

/*
curl --location --request POST 'localhost:8080/v1/user/login' \
--header 'Content-type: application/json' \
--data '{"code":"d0591498-3d27-40eb-aa03-7c5179c98414"}'
*/
func (a UserHandler) Login(c *gin.Context) {
	var u inputs.LoginInput
	if err := c.ShouldBindJSON(&u); err != nil {
		c.JSON(http.StatusUnprocessableEntity, "Invalid json provided")
		return
	}
	//compare the user from the request, with the one we defined:
	// Todo : compare hash
	user, err := models.FindByCode(u.Code)
	if err != nil {
		c.JSON(http.StatusUnauthorized, "Please provide valid email")
		return
	}
	c.JSON(http.StatusOK, user)
}