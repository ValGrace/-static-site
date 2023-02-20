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

	dataChan := make(chan []byte)

	content, err := file.Write(body)

	go func() {
		data := make([]byte, 100)
		count, err := file.Read(data)
		if err != nil {
			fmt.Println("error reading file")
			return
		}
		dataChan <- data[:count]
	}()

	data := <-dataChan
	fmt.Printf("Read %d bytes: %s\n", len(data), data)
	fmt.Println(content)

}
