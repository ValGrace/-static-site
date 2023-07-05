package models

import (
	// "cloud.google.com/go/firestore"
	"context"
	firebase "firebase.google.com/go/v4"
	"fmt"
	// "github.com/ValGrace/static-site-backend/src/db"
	"google.golang.org/api/option"
	"log"
	// "time"
)

const collectionName string = "Blogs"

type BlogPost struct {
	// Id      int    `firestore:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

func (post *BlogPost) Save() {
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

}
