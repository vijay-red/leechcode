package handlers

import (
	"fmt"
	db "leechcode/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SubmitSolution(c *gin.Context) {
	var input db.Submitted_Solution

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(input)
	db.DB.Create(&input)
	c.JSON(http.StatusOK, gin.H{"data": input})
}
