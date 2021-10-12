//dependecies
var express = require('express');
var router = express.Router();


//--------------------------------Endpoints

//base route localhost:port/
router.get("/", function (req, res) {
    res.send("root");
})


//get - retrieve an object(Browser)
//post - creatiing new objects(transfering info(ex.discord))
//patch/put - updating an object
//delete - deleting an object

//-------------------------------------------end Routes/endpoints

module.exports = router;