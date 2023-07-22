package routes

import (
	"github.com/ValGrace/static-site-backend/src/controllers"
	"github.com/gorilla/mux"
)

var RegisterRoutes = func(router *mux.Router) {
	router.HandleFunc("/articles/", controllers.SaveFile).Methods("POST")
	router.HandleFunc("/articles/", controllers.GetDocs).Methods("GET")
	router.HandleFunc("/article/{projectID}/", controllers.RetrieveDoc).Methods("GET")
}
