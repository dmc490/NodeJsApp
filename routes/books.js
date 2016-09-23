/**
 * Created by userr on 23/09/2016.
 */
var express = require('express');
var router = express.Router();
Book = require('../models/book');

router.get('/api/books', function(req,res){
    Book.getBooks(function(err,books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});
router.get('/api/books/:_id', function(req,res){
    Book.getBookById(req.params._id,function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

module.exports = router;