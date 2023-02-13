package main

import (
	"embed"
	"net/http"
	"path/filepath"

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

}
