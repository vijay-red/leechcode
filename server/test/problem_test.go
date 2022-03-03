package test

import (
	"fmt"
	"leechcode/handlers"
	"leechcode/db"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func TestProblemsCrud(t *testing.T) {
	gin.SetMode(gin.TestMode)

	r := gin.Default()
	r.GET("problems", handlers.FindProblem)
	r.GET("problems/:id", handlers.FindProblemBySlug)
	r.POST("problems", handlers.CreateProblem)
	r.PUT("problems/:id", handlers.UpdateProblem)
	r.DELETE("problems/:id", handlers.DeleteProblem)

	req, err := http.NewRequest(http.MethodGet, "problems", nil)

	if err != nil {
		t.Fatalf("Couldn't create a request: %v\n", err)
	}

	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)
	fmt.Println(w.Body)

	if w.Code == http.StatusNotFound {
		t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}

	body := &db.Problem{
	Title : "Two Sum",
	TitleSlug : "two-sum",
	Content : "<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>nn<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>nn<p>You can return the answer in any order.</p>nn<p>&nbsp;</p>n<p><strong>Example 1:</strong></p>nn<pre>n<strong>Input:</strong> nums = [2,7,11,15], target = 9n<strong>Output:</strong> [0,1]n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].n</pre>nn<p><strong>Example 2:</strong></p>nn<pre>n<strong>Input:</strong> nums = [3,2,4], target = 6n<strong>Output:</strong> [1,2]n</pre>nn<p><strong>Example 3:</strong></p>nn<pre>n<strong>Input:</strong> nums = [3,3], target = 6n<strong>Output:</strong> [0,1]n</pre>nn<p>&nbsp;</p>n<p><strong>Constraints:</strong></p>nn<ul>nt<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>nt<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>nt<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>nt<li><strong>Only one valid answer exists.</strong></li>n</ul>nn<p>&nbsp;</p>n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?",

	Difficulty : "Easy",   
	Likes :  28258, 
	Dislikes : 905,
	ExampleTestCases : "[2,7,11,15]n9n[3,2,4]n6n[3,3]n6",
	Hints :  "A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.",
	}

	payloadBuf := new(bytes.Buffer)
json.NewEncoder(payloadBuf).Encode(body)

	req, err = http.NewRequest(http.MethodPost, "problem", )
}
