/**
 * Created by userr on 16/09/2016.
 */
var mongoose = require('mongoose');

// Genre Scheme
var genreSchema = mongoose.Schema({
   name:{
       type: String,
       required:true
   },
    create_date:{
       type:Date,
        default:Date.now
    }
});

var Genre = mongoose.model('Genre',genreSchema);
//var Genre = module.exports = mongoose.model('Genre',genreSchema);

// Get Genres
module.exports.getGenres = function(callback,limit){
    Genre.find(callback).limit(limit);
};

// Add Genre
module.exports.addGenre = function(genre,callback){
    Genre.create(genre,callback);
};