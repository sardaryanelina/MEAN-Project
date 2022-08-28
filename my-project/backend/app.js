const express = require('express');

const app = express();

app.use('/api/books', (req, res, next) => {
  const posts = [
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
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
