package utils

import (
	"encoding/json"
	"fmt"
    "strings"
	"math/rand"
	"github.com/adrg/frontmatter"
	"github.com/russross/blackfriday/v2"
	"io/ioutil"
	"os"
	"net/http"
)

func ParseArticle(r *http.Request, Blog interface{}) {
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

	var matter struct {
		Title       string `yaml:"title"`
		Featured    string `yaml:"featured_image"`
		Description string `yaml:"description"`
	}
	// var tmplt *template.Template
	rest, _ := frontmatter.Parse(strings.NewReader(string(fileContent)), &matter)

	output := blackfriday.Run(rest)

	outputVal := string(output)

	fmt.Println(outputVal)
	postData := fmt.Sprintf(`"Id": "%s", "Title": "%s", "Content", "%s"`, rand.Int63(), "title", outputVal)

	reader := []byte(postData)

	json.Unmarshal(reader, Blog)
	return
}
