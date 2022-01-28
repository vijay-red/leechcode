package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	gin.ForceConsoleColor()

	r := gin.Default()
	ConnectDatabase()
	v1 := r.Group("/api/v1")
	{
		v1.GET("problems", FindProblem)
		v1.GET("problems/:id", FindProblemBySlug)
		v1.POST("problems", CreateProblem)
		v1.PUT("problems/:id", UpdateProblem)
		v1.DELETE("problems/:id", DeleteProblem)
	}

	r.Run()
}
