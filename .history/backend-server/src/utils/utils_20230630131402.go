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
	"time"
	"math/rand"
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

	// title := r.FormValue("title")

	fileContent, _ := os.ReadFile("article.md")

	// fmt.Println(content)

	var matter struct {
		Title  string `yaml:"title"`
		Author string `yaml:"author"`
	}
	// var tmplt *template.Template
	rest, _ := frontmatter.Parse(strings.NewReader(string(fileContent)), &matter)

	output := blackfriday.Run(rest)
	// fmt.Print(matter.Title)
	outputVal := string(output)

	fmt.Println(strings.Join(strings.Fields(outputVal), " "))
	fmt.Println(outputVal)
	fmt.Printf("%+v\n", matter)
	postTime := time.Now().Format("20060102150405")
	contentString := strings.Join(strings.Fields(outputVal), " ")
	postData := fmt.Sprintf(`{"ID", "%v""Title": "%s", "Content": "%s", "Author": "%s", "Created": "%s"}`, rand.Int63(), matter.Title, contentString, matter.Author, postTime)
	fmt.Println(postData)
	reader := []byte(postData)

	json.Unmarshal(reader, blog)
	fmt.Println(blog)
	return
}
