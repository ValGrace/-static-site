package models

import (
	"cloud.google.com/go/firestore"
	"context"
	// "github.com/ValGrace/static-site-backend/src/db"
	"log"
	// "time"
)

const collectionName string = "Blogs"

type BlogPost struct {
	Id      int    `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

func (post *BlogPost) Save() *BlogPost {

	var client *firestore.Client
	var ctx context.Context

	_, _, err := client.Collection(collectionName).Add(ctx, map[string]interface{}{
		"ID":      post.Id,
		"Title":   post.Title,
		"Content": post.Content,
	})
	if err != nil {
		log.Fatalln("Failed to create collection")
	}
	return post
}
