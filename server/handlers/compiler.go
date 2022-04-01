package handlers

import (
	"net/http"

	"leechcode/db"

	"github.com/gin-gonic/gin"

	piston "github.com/milindmadhukar/go-piston"
)

func GetAllCompilers(context *gin.Context) {

	client := piston.CreateDefaultClient()
	runtimes, err := client.GetRuntimes()
	if err != nil {
		context.JSON(http.StatusNoContent, gin.H{})
		return
	}
	context.JSON(http.StatusOK, runtimes)
}

func PostSubmission(context *gin.Context) {
	var input db.Solution
	err := context.ShouldBindJSON(&input)
	// client := piston.CreateDefaultClient()
	// output, err := client.Execute(input.Language, input.Version, input.Code, input.Params)

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"message": "Couldn't connect to piston"})
		return
	}

	// creating an entry in the db
	db.DB.Create(input)

	context.JSON(http.StatusOK, gin.H{"message": "Solution has been submitted"})
	// TODO: implement the following
	// get the test case

	// calling the piston service to obtain result

	// var url string = "http://" + os.Getenv("PISTON_CONTAINER") + "/api/v2/runtimes"

	// create an entry of the executed result and return to in the api

}
