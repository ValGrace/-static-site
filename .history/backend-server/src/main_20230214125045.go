package main

import (
	"embed"
	"fmt"
	"net/http"
	"path/filepath"

	"github.com/ValGrace/static-site-backend/src/routes"
	"github.com/gorilla/mux"
)

var staticFs embed.FS

type clientHandler struct {
	staticPath string
	indexPath  string
}

func (h clientHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main() {
	r := mux.NewRouter()
	routes.RegisterRoutes(r)
	spa := clientHandler{staticPath: "../../client/build", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)
	http.Handle("/", r)
	fmt.Printf("Starting server at port 8080")

	r.PathPrefix("/static").Handler(http.StripPrefix("/static", http.FileServer(http.Dir("../../client/build/static"))))
	http.ListenAndServe(":8080", r)
}
