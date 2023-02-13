import {Client, Account} from "appwrite"

const client = new Client()

client.setEndpoint("http://localhost/v1").setProject("")

export const account = new Account(client) 