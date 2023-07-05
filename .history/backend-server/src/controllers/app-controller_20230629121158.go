package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/ValGrace/static-site-backend/src/models"
	"github.com/ValGrace/static-site-backend/src/utils"
	"net/http"
)

var newPost models.BlogPost

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

func GetDocs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	posts, _ := models.GetCollection()
	res, _ := json.Marshal(posts)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
