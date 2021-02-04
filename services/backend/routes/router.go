package routes

import (
	"github.com/devtshape/ideaz/services/backend/handler"
	"github.com/gin-gonic/gin"
)

func Routes(router *gin.Engine) {
	//curl localhost:8080/ping
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
			"service": "auth",
		})
	})
	userHandler := new(handler.UserHandler)
	v1 := router.Group("/v1")
	userRoutes := v1.Group("/user")

	userRoutes.POST("/login", userHandler.Login)
	userRoutes.POST("/create", userHandler.Create)
	// authRoutes.POST("/verify", authHandler.Verify)
}
