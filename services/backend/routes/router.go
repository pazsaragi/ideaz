package routes

import (
	"github.com/devtshape/ideaz/services/backend/handler"
	"github.com/gin-gonic/gin"
)

func Routes(router *gin.Engine) {
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
			"service": "auth",
		})
	})
	userHandler := new(handler.UserHandler)
	userRoutes := router.Group("/v1/user")

	userRoutes.POST("/login", userHandler.Login)
	userRoutes.POST("/create", userHandler.Create)

	ideaHandler := new(handler.IdeaHandler)
	ideaRoutes := router.Group("/v1/ideas")
	{
		ideaRoutes.POST("/", ideaHandler.Create)
		ideaRoutes.GET("/:id", ideaHandler.FindIdeasByAlias)
	}

	cmtHandler := new(handler.CommentHandler)
	cmtRoutes := router.Group("/v1/comments")
	{
		cmtRoutes.POST("/", cmtHandler.Create)
		cmtRoutes.GET("/:id", cmtHandler.FindCommentsByIdea)
	}
}
