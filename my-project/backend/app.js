const express = require('express');
const bodyParser = require('body-parser');

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
  const book = req.body;
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
