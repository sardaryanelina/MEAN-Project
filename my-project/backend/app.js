const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./models/book');

const app = express();

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
  console.log(book);
  res.status(201).json({
    message: 'Book added successfully'
  });
});

app.get('/api/books', (req, res, next) => {
  const books = [
    {
      id: '111testId12345678',
      title: 'First title',
      author: 'First author',
      description: 'Frist description',
      publisher: 'First publisher',
      publishedDate: new Date(2011, 01, 01),
      pageCount: 111,
      language: 'English',
      price: 11
    },
    {
      id: '222testId12345678',
      title: 'Second title',
      author: 'Second author',
      description: 'Second description',
      publisher: 'Second publisher',
      publishedDate: new Date('February 2, 2022'),
      pageCount: 222,
      language: 'English',
      price: 22
    }
  ];
  res.status(200).json({
    message: 'Books fetched successfully',
    books: books
  });
});

module.exports = app;
