package handlers

import (
	"errors"
	"fmt"
	"leechcode/db"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
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

func GetTestCase(context *gin.Context) {
	var error string = "Invalid ID"
	var testcase db.TestCase
	id := context.Param("id")
	if id == "" {
		context.JSON(http.StatusBadRequest, error)
	}
	err := db.DB.First(&testcase, "id = ?", id).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		context.JSON(404, gin.H{"data": nil})
		return
	}
	context.JSON(http.StatusOK, gin.H{"data": testcase})
}

func GetTestCases(context *gin.Context) {
	var testcases []db.TestCase
	err := db.DB.Find(&testcases).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		context.JSON(404, gin.H{"data": nil})
		return
	}
	context.JSON(http.StatusOK, gin.H{"data": testcases})
}
