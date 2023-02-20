package controllers

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func saveFile(w http.ResponseWriter, r *http.Request) {
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

	content, err := file.Write(body)

	fmt.Println(content)
}
