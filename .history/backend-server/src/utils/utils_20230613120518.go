package utils

import (
	"encoding/json"
	"fmt"

	"math/rand"
)

func ParseArticle(title, content, Blog interface{}) {
	postData := fmt.Sprintf(`"Id": "%s", "Title": "%s", "Content", "%s"`, rand.Int63(), title, content)

	reader := []byte(postData)

	json.Unmarshal(reader, Blog)
	return
}
