package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/ValGrace/static-site-backend/src/models"
	"github.com/ValGrace/static-site-backend/src/utils"
	"github.com/adrg/frontmatter"
	"github.com/russross/blackfriday/v2"
	"io/ioutil"
	"net/http"
	
)

var newPost models.BlogPost

func SaveFile(w http.ResponseWriter, r *http.Request) {
	
	CreatePost := &models.BlogPost{}

	utils.ParseArticle(CreatePost)

	post := CreatePost.Save()
	res, _ := json.Marshal(post)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
