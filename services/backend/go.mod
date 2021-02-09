module github.com/devtshape/ideaz/services/backend

go 1.15

require (
	github.com/cosmtrek/air v1.21.2 // indirect
	github.com/creack/pty v1.1.11 // indirect
	github.com/fatih/color v1.10.0 // indirect
	github.com/gin-contrib/cors v1.3.1
	github.com/gin-gonic/gin v1.6.3
	github.com/imdario/mergo v0.3.11 // indirect
	github.com/joho/godotenv v1.3.0
	github.com/pelletier/go-toml v1.8.1 // indirect
	github.com/satori/go.uuid v1.2.0
	golang.org/x/sys v0.0.0-20210124154548-22da62e12c0c // indirect
	gorm.io/driver/postgres v1.0.8
	gorm.io/gorm v1.20.12
)

replace github.com/satori/go.uuid v1.2.0 => github.com/satori/go.uuid v1.2.1-0.20181028125025-b2ce2384e17b
