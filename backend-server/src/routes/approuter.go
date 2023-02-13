package routes

import (
	"github.com/ValGrace/static-site-backend/src/controllers"
	"github.com/gorilla/mux"
)

var Regis

terRoutes = func(router *mux.Router) {
	router.HandleFunc("/save", controllers.saveFile).Methods("POST")
}
