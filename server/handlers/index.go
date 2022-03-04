package handlers

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func RunRouter() {
	gin.ForceConsoleColor()
	router := gin.Default()
	router.Use(cors.Default())
	routerGroup := router.Group("/api/v1")
	AddProblemPaths(routerGroup)
	AddSolutionPaths(routerGroup)
	AddCompilersPaths(routerGroup)
	AddTestCasePaths(routerGroup)
	router.Run()
}
func AddSolutionPaths(routerGroup *gin.RouterGroup) {
	routerGroup.POST("solution", SubmitSolution)
}

func AddProblemPaths(routerGroup *gin.RouterGroup) {
	routerGroup.GET("problems", FindProblem)
	routerGroup.GET("problems/:id", FindProblemBySlug)
	routerGroup.POST("problems", CreateProblem)
	routerGroup.PUT("problems/:id", UpdateProblem)
	routerGroup.DELETE("problems/:id", DeleteProblem)
}

func AddCompilersPaths(routerGroup *gin.RouterGroup) {
	routerGroup.GET("compilers", GetAllCompilers)
}

func AddTestCasePaths(routerGroup *gin.RouterGroup) {
	routerGroup.POST("test-case", CreateTestCase)
	routerGroup.GET("test-case/:id", GetTestCase)
	routerGroup.GET("test-cases", GetTestCases)
}
