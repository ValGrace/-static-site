package models

import (
	"cloud.google.com/go/firestore"
	"context"
	firebase "firebase.google.com/go/v4"
	"fmt"
	// "github.com/ValGrace/static-site-backend/src/db"
	// "encoding/json"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
	"log"
	"time"
)

const (
	collectionName string = "Blogs"
	credential     string = "F:/static-site/backend-server/src/db/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json"
)

type repo struct{}

type BlogPost struct {
	Title    string    `firestore:"title,omitempty"`
	Content  string    `firestore:"content,omitempty"`
	Author   string    `firestore:"author,omitempty"`
	Featured string    `firestore:"featured,omitempty"`
	Created  time.Time `firestore:"created,omitempty"`
}

func (post *BlogPost) Save() *BlogPost {
	// const credential string = "F:/static-site/backend-server/src/db/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json"
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
func GetCollection() ([]BlogPost, error) {
	ctx := context.Background()
	var (
		post  BlogPost
		posts []BlogPost
	)

	client, _ := firestore.NewClient(ctx, "learner-new-project")
	defer client.Close()
	iter := client.Collection(collectionName).Documents(ctx)
	fmt.Printf(client.Collection(collectionName))
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			fmt.Print(err)
			return []BlogPost{}, err
		}
		doc.DataTo(&post)
		posts = append(posts, post)
	}
	fmt.Println(posts)
	return posts, nil
}

// func GetSingleDoc(id string) (map[string]interface{}, error) {
// 	ctx := context.Background()
// 	client, err := firestore.NewClient(ctx, "learner-new-project")
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer client.Close()
// 	dsnap := client.Collection(collectionName).Doc(id).Collections(ctx)

// 	docData := dsnap.Data()
// 	return docData, nil
// }

// fmt.Println(doc.Data())
// post := BlogPost{
// 	Title:   doc.Data()["title"].(string),
// 	Content: doc.Data()["content"].(string),
// 	Author:  doc.Data()["author"].(string),
// 	Created: doc.Data()["created"].(time.Time),
// }
