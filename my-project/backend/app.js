const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Book = require('./models/book');

const app = express();

mongoose.connect("mongodb+srv://TeamProject:database@bookstore.2kfo5.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed.');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//we do not need for this app

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/books", (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    publisher: req.body.publisher,
    publishedDate: req.body.publishedDate,
    pageCount: req.body.pageCount,
    language: req.body.language,
    price: req.body.price
  });
  book.save().then(createdBook => {
    res.status(201).json({
      message: 'Book added successfully',
      bookId: createdBook.id
    });
  });
});

app.get('/api/books', (req, res, next) => {
  Book.find()
    .then(documents => {
      res.status(200).json({
        message: 'Books fetched successfully',
        books: documents
      });
    });
});

app.delete('/api/books/:id', (req, res, next) => {
  Book.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Book deleted!'
    });
  });
});

module.exports = app;
