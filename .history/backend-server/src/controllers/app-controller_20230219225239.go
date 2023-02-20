package controllers

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"

	// "path/filepath"
	"html/template"
	"strings"

	"github.com/adrg/frontmatter"
	"github.com/russross/blackfriday/v2"
)

func SaveFile(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		fmt.Println(err)
		return
	}

	file, err := os.Create("homepage.md")
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

	rest, _ := frontmatter.Parse(strings.NewReader(string(fileContent)), &matter)

	output := blackfriday.Run(rest)

	path, _ := filepath.Abs(filepath.Join("../../../client/src/Components/TopSection.jsx"))

	fmt.Println(output)

	tmplt, _ := template.ParseFiles(path)

	valerror := tmplt.Execute(w, matter)

	if valerror != nil {
		return
	}

}
