package handlers

import (
	"fmt"
	"leechcode/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SubmitSolution(c *gin.Context) {
	// Create an entry for the user solution
	// compile the solution
	// return back the test results
	var input db.Solution
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(input)
	db.DB.Create(&input)
	c.JSON(http.StatusOK, gin.H{"data": input})
}
