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
	"os"
	"time"
)

const (
	collectionName string = "Blogs"
)

var credential string = GetCredentials("C:/Users/Hp 15/Downloads/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json")

// var credential string = os.Getenv(credential)
type repo struct{}

type BlogPost struct {
	ID       string    `firestore:"-"`
	Title    string    `firestore:"title,omitempty"`
	Content  string    `firestore:"content,omitempty"`
	Author   string    `firestore:"author,omitempty"`
	Featured string    `firestore:"featured,omitempty"`
	Created  time.Time `firestore:"created,omitempty"`
}

func GetCredentials(creds string) string {
	if gcpCreds := os.Getenv("credentials"); gcpCreds != "" {
		return gcpCreds
	}
	return creds
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
		log.Fatalln(err)
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

	client, err := firestore.NewClient(ctx, "learner-new-project")
	if err != nil {
		fmt.Print(err)

	}
	defer client.Close()
	iter := client.Collection(collectionName).Documents(ctx)

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
		post.ID = doc.Ref.ID
		posts = append(posts, post)
	}
	fmt.Println(posts)
	return posts, nil
}

func GetSingleDoc(id string) (*BlogPost, error) {
	ctx := context.Background()
	client, _ := firestore.NewClient(ctx, "learner-new-project")
	var blog BlogPost
	// if err != nil {
	// 	return nil, err
	// }
	defer client.Close()
	dsnap, err := client.Collection(collectionName).Doc(id).Get(ctx)
	if err != nil {
		return nil, err
	}
	dsnap.DataTo(&blog)
	fmt.Print(&blog)
	return &blog, nil
}

// func DeleteDoc(id string) (*BlogPost, error) {
// 	ctx := context.Background()
// 	client, err := firestore.NewClient(ctx, "learner-new-project")
// 	va
// }
