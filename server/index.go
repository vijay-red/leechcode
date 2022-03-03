package main

import (
	"leechcode/handlers"

	"github.com/gin-gonic/gin"
)

func RunRouter() {
	gin.ForceConsoleColor()
	router := gin.Default()
	routerGroup := router.Group("/api/v1")
	AddProblemPaths(routerGroup)
	AddSolutionPaths(routerGroup)
	AddCompilersPaths(routerGroup)
	AddTestCasePaths(routerGroup)
	router.Run()
}
func AddSolutionPaths(routerGroup *gin.RouterGroup) {
	routerGroup.POST("solution", handlers.SubmitSolution)
}

func AddProblemPaths(routerGroup *gin.RouterGroup) {
	routerGroup.GET("problems", handlers.FindProblem)
	routerGroup.GET("problems/:id", handlers.FindProblemBySlug)
	routerGroup.POST("problems", handlers.CreateProblem)
	routerGroup.PUT("problems/:id", handlers.UpdateProblem)
	routerGroup.DELETE("problems/:id", handlers.DeleteProblem)
}

func AddCompilersPaths(routerGroup *gin.RouterGroup) {
	routerGroup.GET("compilers", handlers.GetAllCompilers)
}

func AddTestCasePaths(routerGroup *gin.RouterGroup) {
	routerGroup.POST("test-case", handlers.CreateTestCase)
	routerGroup.GET("test-case/:id", handlers.GetTestCase)
	routerGroup.GET("test-cases", handlers.GetTestCases)
}
