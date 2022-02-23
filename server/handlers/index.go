package handlers

import (
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
}
