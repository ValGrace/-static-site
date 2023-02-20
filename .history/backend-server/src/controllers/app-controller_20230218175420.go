package controllers

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"

	"github.com/adrg/frontmatter"
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

	fmt.Println(string(rest), matter)

}
