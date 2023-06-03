import express from "express";

const app = express()
const port = 3000

const books = [
  { id: "12a1873-1441-48cc-b3d1-d5e32455f15b", name: "Don Quixote", "author": "Miguel de Cervantes" },
  { id: "91bef1eb-9563-43d0-8ef0-11c15e97d05a", name: "Lord of the Rings", "author": "J.R.R. Tolkien" },
  { id: "d1732d40-ebfc-4499-b320-632fdc7f5872", name: "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling" },
  { id: "0e592209-b2bd-4c5a-87f6-9acf039f9ee2", name: "And Then There Were None", "author": "Agatha Christie" },
  { id: "ce34bdfd-de4a-435a-a9a1-8666162e0f36", name: "Alice's Adventures in Wonderland", "author": "Lewis Carroll" },
  { id: "2f581799-0060-4719-951d-f363594ba183", name: "The Lion, the Witch, and the Wardrobe", "author": "C.S. Lewis" },
  { id: "9ad99c43-d263-4d09-8de5-09fb6eb074d7", name: "Pinocchio", "author": "Carlo Collodi" },
  { id: "389824aa-f136-4ded-9923-db2f3563c334", name: "Catcher in the Rye", "author": "J.D. Salinger" },
  { id: "819a74cb-e0cb-49a3-875b-08243ce4765e", name: "Anne of Green Gables", "author": "L. M. Montgomery" },
  { id: "eba7c034-cfba-4a1a-a4e7-c0b2f68243a9", name: "Twenty Thousand Leagues Under the Sea", "author": "Jules Verne" }
]

app.get('/books', (req, res) => {
  res.send({ items: books, metadata: { "title": "10 Most Popular Books of All Time", "source": "https://earlybirdbooks.com/most-popular-books" } })
})

app.listen(port, () => {
  console.log(`Books app listening on port ${port}`)
})