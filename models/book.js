const mongoose = require('mongoose');
/* 
console.log(mongoose.Schema, " :inside modles/book.js");
*/
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : String,
    price : Number,
    author : String
},{timestamps : true});

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;