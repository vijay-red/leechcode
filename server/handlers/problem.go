package handlers

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"leechcode/db"
)

func FindProblem(c *gin.Context) {
	var problems []db.Problem
	db.DB.Find(&problems)
	c.JSON(http.StatusOK, gin.H{
		"data": problems})
}

func FindProblemBySlug(c *gin.Context) {
	var problem db.Problem
	id := c.Param("id")

	err := db.DB.First(&problem, "title_slug = ?", id).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(404, gin.H{"data": nil})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": problem})
}

func CreateProblem(context *gin.Context) {
	var input db.Problem

	if err := context.ShouldBindJSON(&input); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(input)
	db.DB.Create(&input)
	context.JSON(http.StatusOK, gin.H{"data": input})
}

// TODO: Implement the function
func UpdateProblem(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "updatePerson Called"})
}

func DeleteProblem(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "deletePerson " + id + " Called"})
}
