const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');
// update comment
router.get('/:id/edit',(req,res,next)=>{
    const id = req.params.id;
    Comment.findById(id,(err,comment)=> {
        res.render('updateComment',{comment});
    })

})
router.post('/:id',(req,res,next)=>{
    const id = req.params.id;
    Comment.findByIdAndUpdate(id,req.body,(err,updatedComment)=> {
        if(err) return next(err);
        res.redirect('/books/' + updatedComment.bookId);
    })
})

// delete comment
router.get('/:id/delete',(req,res,next)=> {
    const id = req.params.id;
    Comment.findByIdAndDelete(id,(err,comment)=> {
        if(err) next(err);
        Book.findByIdAndUpdate(comment.bookId,{$pull : {comment : comment.id}}, (err,book)=> {
            if(err) return next(err);
            res.redirect('/books/' + comment.bookId);
        })
    })
})
module.exports = router;
