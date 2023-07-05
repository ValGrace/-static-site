package routes

import (
	"github.com/ValGrace/static-site-backend/src/controllers"
	"github.com/gorilla/mux"
)

var RegisterRoutes = func(router *mux.Router) {
	router.HandleFunc("/home/save", controllers.SaveFile).Methods("POST")
}
