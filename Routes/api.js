//dependecies
const { application } = require("express");
var express = require("express");
var router = express.Router();
var fs = require("fs");
//CRUD-Create,Read,Update,Delete
//--------------------------------Endpoints/Routes
// press Ctrl + C to end



//get all of our recources
router.get("/", function (req, res) {
    try{
    
    var rawdata = fs.readFileSync("data.json");// >buffer >Hex code 
    var chatD = JSON.parse(rawdata);

    console.log(chatD);

    res.status(200).json(chatD);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//create a new recource
router.post("/",function(req,res){

    try{ 
        console.log("Posted object is" ,req.body);

         //Open the file
        const rawdata = fs.readFileSync("data.json");
    
        //Decode the file(Parse) so we can use it
        var chatD = JSON.parse(rawdata);

        //add data but controlled
        var id = req.params.id;
        var rawBody = req.body;

       

        if(rawBody.Channel != null)
        {
            chatD[id].Channel = rawBody.Channel;
        }
        if(rawBody.Message != null)
        {
            chatD[id].Message = rawBody.Message;
        }
        if(rawBody.Username != null)
        {
            chatD[id].Username = rawBody.Username;
        }
        
        var newObj = req.body
        newObj.id = 1;
        chatD.push(newObj);

        //save (write) the data back to the file
        const data = fs.writeFileSync("data.json", JSON.stringify(chatD));
        
        //return the data to tehy user
        res.status(200).json(chatD[id]);
    }

    catch(err){
        res.status(500).json({message: err.message});
    }

});

//updated recource
router.patch("/:id",function(req,res){
    try{
    console.log("Object is being patched: ", req.params.id,req.body);
    //open the file
    const rawBody = fs.readFileSync("data.json");
    //decode the file(parse) so we can use it

    }
    catch{

    }
});

//delete the recource
router.delete("/:id",function(req,res){
//capture id
var id = req.params.id;
//open the file
const rawdata = fs.readFileSync("data.json");
var chatD = JSON.parse(rawdata);

//if found
if(chatD.length > id){
    //change/modify
    chatD.splice(id,1);
    //write to file
const data = fs.writeFileSync("data.json",JSON.stringify(chatD));

    res.status(200).json({message:"deleted"});
}else{
    res.status(500).json({message:"Error"});
}
function logAccess(req,res,next){
    console.log("endpoint was hit");
    next();
}
});





module.exports = router;
//get - retrieve an object(Browser)
//post - creatiing new objects(transfering info(ex.discord))
//patch/put - updating an object
//delete - deleting an object

//-------------------------------------------end Routes/endpoints
//status - http response status codes
