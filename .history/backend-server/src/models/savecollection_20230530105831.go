package db

import (
	"github.com/ValGrace/static-site-backend/db"
    "context" 
	"cloud.google.com/go/firestore"
	"time"
)

const collectionName string = "Blogs"

type BlogPost struct {
	Id int `firestore:"id"`
	Title string `firestore:"title"`
	Content string `firestore:"content`
	CreatedTime time.Time `firestore"created"`
}

func Save(ctx context.Context, client *firestore.Client, post *BlogPost) {
      db.InitializeDB()

	 _, _, err := client.Collection(collectionName).Add(ctx, map[string]interface{}{
         "ID": post.Id,
		 "Title": post.Title,
		 "Content": post.Content,
		 "TimeStamp": post.CreatedTime
	 }) 
    return post, err
} 