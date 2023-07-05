import {Client, Account} from "appwrite"

const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64940746ea62d29f596e")

export const account = new Account(client) 