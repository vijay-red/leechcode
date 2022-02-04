package handlers

import (
	"fmt"
	"leechcode/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateTestCase(context *gin.Context) {
	var input db.TestCase

	if err := context.ShouldBindJSON(&input); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(input)
	db.DB.Create(&input)
	fmt.Println(input)
	context.JSON(http.StatusOK, gin.H{"data": input})
}
