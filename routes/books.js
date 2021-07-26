const express = require('express');
const Book = require('../models/book');
const router = express.Router();

router.get('/',(req,res,next)=> {

    Book.find({},(err,books) => {
        console.log(err,books);
        if(err) return next(err);
        res.render('books', {books : books});
    })
});

router.get('/new',(req,res)=> {
    res.render('addBook');
})

router.post('/',(req,res,next)=> {
    // capture data
    console.log(req.body);
    // save it to the database
    Book.create(req.body,(err,createdBook) => {
        if(err){
           return  next(err);
        }
        // response
        res.redirect('/books')
        
    })
});

router.get('/:id',(req,res,next)=> {
    
    const id = req.params.id;
    Book.findById(id,(err,book)=> {
        if(err) return next(err);
        res.render('book', {book:book})
    })
})



module.exports = router;