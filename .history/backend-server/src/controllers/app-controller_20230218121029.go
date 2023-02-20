package controllers

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
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

	content, err := file.Write(body)

	fileContent, err := ioutil.ReadFile("homepage.md")

	fmt.Println(content, string(fileContent))

}
