package models

import (
	"cloud.google.com/go/firestore"
	"context"
	"fmt"
	"google.golang.org/api/iterator"
)

type repo struct{}

// Function to Get Collection from firestore
func (*repo) GetCollection() error {
	ctx := context.Background()
	client := *firestore.Client
	iter := client.Collection("cities").Documents(ctx)

	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return err
		}
		fmt.Println(doc.Data())
	}
	return nil
}
