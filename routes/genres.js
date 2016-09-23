/**
 * Created by userr on 23/09/2016.
 */
var express = require('express');
var router = express.Router();
Genre = require('./models/genre');

router.get('/api/genres', function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});
router.post('/api/genres', function(req,res){
    var genre = req.body;
    Genre.addGenre(genre,function(err,genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});


module.exports = router;