package utils

import (
	"encoding/json"
	"fmt"

	"math/rand"
	"time"
)

func ParseArticle(Blog interface{}) {
	postData := fmt.Sprintf(`"Id": "%s", "Title": "%s", "Content", "%s", "CreatedTime": "%s"`, rand.Int63n(), "title", "content", time.Now())

	reader := []byte(postData)

	json.Unmarshal(reader, Blog)
	return
}
