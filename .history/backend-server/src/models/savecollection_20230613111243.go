package models

import (
	"cloud.google.com/go/firestore"
	"context"
	"github.com/ValGrace/static-site-backend/src/db"
	"log"
	"time"
)

const collectionName string = "Blogs"

type BlogPost struct {
	Id          int       `firestore:"id"`
	Title       string    `firestore:"title"`
	Content     string    `firestore:"content"`
	CreatedTime time.Time `firestore:"created"`
}
db.InitializeDB()
var client *firestore.Client
var ctx context.Context

func (post *BlogPost) Save() *BlogPost {
	

	_, _, err := client.Collection(collectionName).Add(ctx, map[string]interface{}{
		"ID":        post.Id,
		"Title":     post.Title,
		"Content":   post.Content,
		"TimeStamp": post.CreatedTime,
	})
	if err != nil {
		log.Fatalln(err)
	}
	return post
}
