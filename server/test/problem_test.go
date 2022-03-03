package test

import (
	"fmt"
	"leechcode/handlers"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func TestProblemsGet(t *testing.T) {
	gin.SetMode(gin.TestMode)

	r := gin.Default()
	r.GET("problems", handlers.FindProblem)

	req, err := http.NewRequest(http.MethodGet, "/", nil)

	if err != nil {
		t.Fatalf("Couldn't create a request: %v\n", err)
	}

	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)
	fmt.Println(w.Body)

	if w.Code == http.StatusOK {
        t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
    } else {
        t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
    }
}
