const express = require('express')
const app = express()
const port = 3000

// Temp val for the films 
let films = [];

// Create a film
app.post('/films', (req, res) => {
  // Logic to add a book
  const { title, director } = req.body;
  if (!title || !director) {
    return res.status(400).send('Missing title or director');
  }

  const newFilm = { id: films.length + 1, title, director };
  films.push(newFilm);
  res.status(201).send(newFilm);
});

// Get All Books
app.get('/films', (req, res) => {
  res.json(films);
});

// Get a Single Book
app.get('/films/:id', (req, res) => {
  // Logic to get a single book

});

// Update a Book
app.put('/films/:id', (req, res) => {
  // Logic to update a book
});

// Delete a Book
app.delete('/films/:id', (req, res) => {
  // Logic to delete a book
});
