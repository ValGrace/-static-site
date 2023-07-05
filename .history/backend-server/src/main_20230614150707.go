package main

import (
	"context"
	"embed"
	firebase "firebase.google.com/go/v4"
	"fmt"
	"github.com/ValGrace/static-site-backend/src/routes"
	"github.com/gorilla/mux"
	"google.golang.org/api/option"
	"log"
	"net/http"
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

func main() {
	const credential string = "F:/static-site/backend-server/src/db/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json"
	opt := option.WithCredentialsFile(credential)
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil, opt)

	if err != nil {
		fmt.Errorf("error initializing app: %v", err)
		return
	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	defer client.Close()
	r := mux.NewRouter()
	routes.RegisterRoutes(r)
	spa := clientHandler{staticPath: "../../client/dist", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)
	http.Handle("/", r)
	fmt.Printf("Starting server at port 8080")

	r.PathPrefix("/assets").Handler(http.StripPrefix("/assets", http.FileServer(http.Dir("../../client/dist/assets"))))
	http.ListenAndServe(":8080", r)
}
