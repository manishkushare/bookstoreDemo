const express = require('express');
const Book = require('../models/book');
const router = express.Router();
const Comment = require('../models/comments')

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
/*

router.get('/:id',(req,res,next)=> {
    
    const id = req.params.id;
    Book.findById(id,(err,book)=> {
        if(err) return next(err);
        res.render('book', {book:book})
    })
})

*/
// get single book details
/*
router.get('/:id',(req,res,next)=> {
    
    const id = req.params.id;
    // without using populate
    Book.findById(id,(err,book)=> {
        if(err) return next(err);
        Comment.find({bookId : id},(err,comment)=> {
            if(err) return next(err);
            console.log(comment)
            res.render('book', {book,comment}); 
        })
    })
})


*/
/*
whenever, we need to perform multiple operations we can use the pipe notation , that is we can add the filters or the operations using dot notation

pipelining
#############
Book.find().sort({insertedAt: 1}).limit(10).exec((err,result)=> {

})
#############
sort is use to sort the commment for eg - {insertredAt : 1}  will sort the document in the ascending order; 
{insertedAt : -1} will sort the comments in the descneding order

limit(10) will limit the documents to the count 10

Now when we use pipeline , there is function called 'exec' it gives us call back function contains err, result 


*/
// get single book and comments of that book using populate

router.get('/:id',(req,res,next)=> {
    
    const id = req.params.id;
    // using populate
    /*
    1. here first we find a book using id by Book.findById(id)
    2. we use pipe operator to populate the comments key of inside the document , it will replace the id with the exact data of the comments from the comment collections
    */
    Book.findById(id).populate('comments').exec((err,book)=>{
        console.log(err, book);
        if(err) return next(err);
        res.render('book',{book});
    })
})

router.get('/:id/edit',(req,res)=> {
    const id = req.params.id
    Book.findById(id,(err,book)=> {
        if(err) return next(err);
        res.render('editBookform',{book:book});
    })
})

router.post('/:id',(req,res)=> {
    const id = req.params.id;
    Book.findByIdAndUpdate(id, req.body , {new :true}, (err,book)=> {
        if(err) return next(err);
        res.redirect('/books/'+ id);
    })
})
router.get('/:id/delete',(req,res,next)=> {
    const id = req.params.id;
    Book.findByIdAndDelete(id,(err,book) => {
        if(err) return next(err);
        Comment.deleteMany({bookId : book.id},(err,info)=> {
            if(err) return next(err);
            res.redirect('/books');
        })
    })
})

// create a comment
// here we actually done cross-referencing 
router.post('/:id/comments',(req,res,next)=> {
    const id= req.params.id;
    req.body.bookId = id; // adding book id inside comment 
    Comment.create(req.body,(err, comment)=> {
        console.log(comment,err)
        if(err) return next(err);
        // down adding comment id insdie book collection
        Book.findByIdAndUpdate(id,{$push : {comments : comment.id}}, (err,book) => {
            if(err) return next(err);
            res.redirect('/books/' + id);
        })
    })
    

})




module.exports = router;