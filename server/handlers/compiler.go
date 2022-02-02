package handlers

import (
	"encoding/json"
	"fmt"
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

func GetAllCompilers(context *gin.Context) {
	var url string = "http://" + os.Getenv("PISTON_CONTAINER") + "/api/v2/runtimes"
	fmt.Println("url:" + url)
	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	b, err := io.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}
	var supportLanguages []SupportLanguage
	json.Unmarshal(b, &supportLanguages)

	fmt.Println("body:" + string(b))
	if err != nil {
		fmt.Print(err.Error())
	}

	context.JSON(http.StatusOK, gin.H{"result": supportLanguages})
}
