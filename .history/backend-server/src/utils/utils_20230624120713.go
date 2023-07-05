package utils

import (
	"encoding/json"
	"fmt"
	"github.com/adrg/frontmatter"
	"github.com/russross/blackfriday/v2"
	// "html"
	// "io/ioutil"
	"net/http"
	"os"
	"strings"
)

func ParseArticle(r *http.Request, blog interface{}) {
	// body, err := ioutil.ReadAll(r.Body)
	txtForm := r.FormValue("article")

	file, err := os.Create("article.md")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	// dataChan := make(chan []byte)

	_, _ = file.Write([]byte(txtForm))

	title := r.FormValue("title")

	fileContent, _ := os.ReadFile("article.md")

	// fmt.Println(content)

	var matter struct {
		Title       string `yaml:"title"`
		Featured    string `yaml:"featured_image"`
		Description string `yaml:"description"`
	}
	// var tmplt *template.Template
	rest, _ := frontmatter.Parse(strings.NewReader(string(fileContent)), &matter)

	output := blackfriday.Run(rest)
	// fmt.Print(matter.Title)
	outputVal := string(output)

	fmt.Println(strings.Join(strings.Fields(outputVal), " "))
	fmt.Println(outputVal)

	contentString := strings.Replace(string(fileContent), "\n", "", -1)
	postData := fmt.Sprintf(`{"Title": "%s", "Content": "%s"}`, title, contentString)
	fmt.Println(postData)
	reader := []byte(postData)

	json.Unmarshal(reader, blog)
	fmt.Println(blog)
	return
}
