package routes

import (
	"github.com/gorilla/mux"
)

var RegisterRoutes = func(router *mux.Router) {
	router.HandleFunc("/save", controllers.saveFile).Methods("POST")
}
