package db

import (
	"context"
	"fmt"
	"log"
   
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"

	"google.golang.org/api/v4/option"
)
func InitializeDB() {
	
opt := option.WithCredentialsFile("C:/Users/Hp 15/Downloads/learner-new-project-firebase-adminsdk-6zymr-fa93826a2d.json")
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

