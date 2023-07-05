package db

// import (
// 	"context"
// 	firebase "firebase.google.com/go/v4"
// 	"fmt"
// 	"google.golang.org/api/option"
// 	"log"
// )

// const credential string = "F:/static-site/backend-server/src/db/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json"

// func InitializeDB() {

// 	opt := option.WithCredentialsFile(credential)
// 	ctx := context.Background()
// 	app, err := firebase.NewApp(ctx, nil, opt)

// 	if err != nil {
// 		fmt.Errorf("error initializing app: %v", err)
// 		return
// 	}
// 	client, err := app.Firestore(ctx)
// 	if err != nil {
// 		log.Fatalln(err)
// 	}
// 	defer client.Close()
// }
