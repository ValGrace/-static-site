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
	"os"
	"strings"
)

var newPost models.BlogPost

func SaveFile(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		fmt.Println(err)
		return
	}
	// cre
	file, err := os.Create("article.md")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	// dataChan := make(chan []byte)

	content, _ := file.Write(body)

	fileContent, _ := ioutil.ReadFile("article.md")

	fmt.Println(content)

	
	// var tmplt *template.Template
	rest, _ := frontmatter.Parse(strings.NewReader(string(fileContent)), &matter)

	output := blackfriday.Run(rest)

	outputVal := string(output)

	fmt.Println(outputVal)
	CreatePost := &models.BlogPost{}

	utils.ParseArticle("title", outputVal, CreatePost)

	post := CreatePost.Save()
	res, _ := json.Marshal(post)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
