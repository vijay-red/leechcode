package main

import (
	db "leechcode/db"
	handlers "leechcode/handlers"
)

func main() {
	// connect the db and run the router
	db.ConnectDatabase()
	handlers.RunRouter()
}
