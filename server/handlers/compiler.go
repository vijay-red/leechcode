package handlers

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

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

	fmt.Println("body:" + string(b))
	if err != nil {
		fmt.Print(err.Error())
	}

	context.JSON(http.StatusOK, gin.H{"result": b})
}
