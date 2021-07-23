const express = require('express');
const Book = require('../models/book');
const router = express.Router();

router.get('/',(req,res)=> {
    res.render('books');
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
        console.log(createdBook);
    })
    // response
})



module.exports = router;