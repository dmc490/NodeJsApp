/**
 * Created by userr on 16/09/2016.
 */
var mongoose = require('mongoose');

// Book Scheme
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    genre:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required:true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Book = mongoose.model('Book',bookSchema);
//var Genre = module.exports = mongoose.model('Genre',genreSchema);

// Get Genres
module.exports.getBooks = function(callback,limit){
    Book.find(callback).limit(limit);
};

// Get Genres
module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
};