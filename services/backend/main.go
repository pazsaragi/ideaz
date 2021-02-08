package main

import (
	"log"

	"github.com/devtshape/ideaz/services/backend/models"
	"github.com/devtshape/ideaz/services/backend/routes"
	"github.com/joho/godotenv"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var (
	err   error
)

func main() {
	// Load env's
	err := godotenv.Load()
	if err != nil {
		log.Printf("Error loading .env file")
	}
	log.Println("Starting server..")
	// Init Router
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"*"},
		AllowCredentials: true,
  }))
	models.ConnectDataBase()
	// Route Handlers / Endpoints
	routes.Routes(router)
	// Start Server
	log.Fatal(router.Run(":8080"))
}
