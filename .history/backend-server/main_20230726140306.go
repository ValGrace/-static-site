package main

import (
	"embed"

	"fmt"

	"github.com/ValGrace/static-site-backend/src/routes"
	"github.com/gorilla/mux"

	"net/http"
	"os"
	"path/filepath"
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
func envPortOr(port string) string {
	if envPort := os.Getenv("PORT"); envPort != "" {
		return ":" + envPort
	}
	return ":" + port
}
func main() {

	r := mux.NewRouter()
	routes.RegisterRoutes(r)
	spa := clientHandler{staticPath: "../client/dist", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)
	http.Handle("/", r)
	fmt.Printf("Starting server at env port")

	r.PathPrefix("/assets").Handler(http.StripPrefix("/assets", http.FileServer(http.Dir("../client/dist/assets"))))
	var port = envPortOr("3000")
	http.ListenAndServe(port, r)
}
