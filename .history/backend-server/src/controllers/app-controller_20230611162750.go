package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	// "path/filepath"
	"github.com/ValGrace/static-site-backend/src/models"
	"github.com/ValGrace/static-site-backend/src/utils"
	"github.com/adrg/frontmatter"
	"github.com/russross/blackfriday/v2"
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

	fileContent, _ := ioutil.ReadFile("homepage.md")

	fmt.Println(content)

	var matter struct {
		Title       string `yaml:"title"`
		Featured    string `yaml:"featured_image"`
		Description string `yaml:"description"`
	}
	// var tmplt *template.Template
	rest, _ := frontmatter.Parse(strings.NewReader(string(fileContent)), &matter)

	output := blackfriday.Run(rest)

	outputVal := string(output)

	// newContent, err := ioutil.ReadFile("../../../client/src/Components/TopSection.jsx")

	// contentStr := string(newContent)

	// newContentVal := strings.ReplaceAll(contentStr, "Modify this blog title", matter.Title)

	// err = ioutil.WriteFile("/client/src/Components/TopSection.jsx", []byte(newContentVal), 0644)

	fmt.Println(outputVal)
	CreatePost := &models.BlogPost{}

	utils.ParseArticle(CreatePost)

	post := moSave.CreatePost()

	res, _ := json.Marshal(post)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
