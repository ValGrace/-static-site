package models

import (
	"cloud.google.com/go/firestore"
	"context"
	firebase "firebase.google.com/go/v4"
	"fmt"
	// "github.com/ValGrace/static-site-backend/src/db"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
	"log"
	"time"
)

const collectionName string = "Blogs"

type repo struct{}

type BlogPost struct {
	// Id      int    `firestore:"id"`
	Title   string `firestore:"title,omitempty"`
	Content string `firestore:"content,omitempty"`
	Author  string `firestore:"author,omitempty"`
	//suggest how i can declare timestamp in the struct
	Created time.Time
}

func (post *BlogPost) Save() *BlogPost {
	const credential string = "F:/static-site/backend-server/src/db/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json"
	opt := option.WithCredentialsFile(credential)
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil, opt)

	if err != nil {
		fmt.Errorf("error initializing app: %v", err)

	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	defer client.Close()
	fmt.Print(post)
	// create collection in firestore and add data to the collection
	_, _, err = client.Collection(collectionName).Add(ctx, post)
	if err != nil {
		log.Fatalln("Failed to create collection")
	}
	return post
}

// Function to Retrieve Collection from firestore
func GetCollection() error {
	ctx := context.Background()
	var (
		client *firestore.Client
		posts  []BlogPost
	)

	iter := client.Collection(collectionName).Documents(ctx)

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return err
		}
		post := BlogPost{
			Title:   doc.Data()["Title"].(string),
			Content: doc.Data()["Content"].(string),
			Author:  doc.Data()["Author"].(string),
			Created: doc.Data()["Created"].(time.Time),
		}
		posts = append(posts, post)
        
	}
	fmt.Print(posts) 
	return posts
}
