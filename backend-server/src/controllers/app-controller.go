package controllers

import (
	"io/ioutil"
	"net/http"
)

func saveFile(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.Readall(r.Body)

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

	_, err = file.WriteString()
}
