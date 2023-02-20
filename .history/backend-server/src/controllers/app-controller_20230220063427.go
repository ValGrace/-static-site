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

	templt := `<div className="top-text" id="top-text">
	<h2 id="htitle">{{.Title}}
		
	   </h2>
	<p>{{.Description}}</p>
	</div>
	<div className="head-section">
	  <div className="head-img">
		  <img src={{.Featured}} alt="sec-photo" />
	  </div>
	  
	</div>
	<div className="site-descr">
	  <h3>We Write articles about tech</h3>
	  <div className="site-sep"></div>
	  {{output}}
	</div>`

	tmplt, _ := template.New("html").Parse(templt)

	nfile, _ := os.Open(path)

	defer nfile.Close()

	valerror := tmplt.Execute(nfile, matter)

	if valerror != nil {
		return
	}

}
