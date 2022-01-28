package main

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func FindProblem(c *gin.Context) {
	var problems []Problem
	DB.Find(&problems)
	c.JSON(http.StatusOK, gin.H{
		"data": problems})
}

func FindProblemBySlug(c *gin.Context) {
	var problem Problem
	id := c.Param("id")

	err := DB.First(&problem, "title_slug = ?", id).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(404, gin.H{"data": nil})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": problem})
}

func CreateProblem(c *gin.Context) {
	var input Problem

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(input)
	DB.Create(&input)
	c.JSON(http.StatusOK, gin.H{"data": input})
}

func UpdateProblem(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "updatePerson Called"})
}

func DeleteProblem(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "deletePerson " + id + " Called"})
}
