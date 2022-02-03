package handlers

import (
	"encoding/json"
	"io"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

// Struct is used to give a skeleton to the receiveing data from the piston api
type SupportLanguage struct {
	Language string   `json:"language"`
	Version  string   `json:"version"`
	Aliases  []string `json:"aliases"`
}

func panicIfNotNill(err error) {
	if err != nil {
		panic(err)
	}
}

func GetAllCompilers(context *gin.Context) {
	var url string = "http://" + os.Getenv("PISTON_CONTAINER") + "/api/v2/runtimes"
	response, err := http.Get(url)
	panicIfNotNill(err)
	b, err := io.ReadAll(response.Body)
	panicIfNotNill(err)
	var supportLanguages []SupportLanguage
	json.Unmarshal(b, &supportLanguages)
	panicIfNotNill(err)
	context.JSON(http.StatusOK, gin.H{"result": supportLanguages})
}

func PostSubmissionAndGetResults(context *gin.Context) {

}
