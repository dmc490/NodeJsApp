/**
 * Created by userr on 23/09/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/reactApp', function(req,res){
    res.render(genres);
});


module.exports = router;