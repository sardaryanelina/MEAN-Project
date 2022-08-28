const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, default: 'No description' },
  publisher: { type: String, default: 'No info about publisher' },
  publishedDate: Date,
  pageCount: Number,
  language: String,
  price: { type: Number, required: true }
});
