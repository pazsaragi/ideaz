module github.com/devtshape/ideaz/services/backend

go 1.15

require (
	github.com/gin-contrib/cors v1.3.1
	github.com/gin-gonic/gin v1.6.3
	github.com/joho/godotenv v1.3.0
	github.com/satori/go.uuid v1.2.0
	gorm.io/driver/postgres v1.0.8
	gorm.io/gorm v1.20.12
)

replace github.com/satori/go.uuid v1.2.0 => github.com/satori/go.uuid v1.2.1-0.20181028125025-b2ce2384e17b
