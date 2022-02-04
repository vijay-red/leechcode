package main

import (
	"leechcode/db"
	"leechcode/handlers"
)

func main() {
	// connect the db and run the router
	db.ConnectDatabase()
	handlers.RunRouter()
}
