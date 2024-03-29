package main

import (
	"embed"
	"log"
	"os"

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

	_, err = os.Stat(path)

	if os.IsNotExist(err) {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)

		return
	}
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

	r.PathPrefix("/assets").Handler(http.StripPrefix("/assets", http.FileServer(http.Dir("../client/dist/assets"))))
	var port = envPortOr("3000")
	fmt.Printf("Starting server at env port" + port[1:])
	log.Fatal(http.ListenAndServe(port, r))
}
