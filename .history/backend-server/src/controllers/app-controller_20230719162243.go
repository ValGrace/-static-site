package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/ValGrace/static-site-backend/src/models"
	"github.com/ValGrace/static-site-backend/src/utils"
	"github.com/gorilla/mux"
	"net/http"
)

var newPost models.BlogPost

// function to create a new post
func SaveFile(w http.ResponseWriter, r *http.Request) {

	CreatePost := &models.BlogPost{}

	utils.ParseArticle(r, CreatePost)
	fmt.Print(CreatePost)
	post := CreatePost.Save()
	res, _ := json.Marshal(post)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Print(post)
	w.Write(res)
}

// function to get all posts
func GetDocs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	posts, _ := models.GetCollection()
	res, _ := json.Marshal(posts)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func RetrieveDoc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	projectID := vars["projectID"]
	post, _ := models.GetSingleDoc(projectID)
	res, _ := json.Marshal(post)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
