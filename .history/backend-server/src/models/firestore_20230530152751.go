package models

import (
	"context"
	"fmt"
	"log"

	firebase "firebase.google.com/go/v4"

	"google.golang.org/api/v4/option"
)

const credential string = "C:/Users/Hp 15/Downloads/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json"
func InitializeDB() {

   opt := option.WithCredentialsFile(credential)
   ctx := context.Background()
   app, err := firebase.NewApp(ctx, nil, opt)

   if err != nil {
	 fmt.Errorf("error initializing app: %v", err)
	 return nil, err 
 }
   client, err := app.Firestore(ctx)
if err != nil {
	log.Fatalln(err)
}
defer client.Close()
}   

