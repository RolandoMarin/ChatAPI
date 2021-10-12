var express = require("express");
var app = express();
var apiRoutes = require("./Routes/api");
var rootROutes = require("./Routes/root");
var morgan = require("morgan")

//set up our app(Server/middleware)
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(morgan("combined"));

//add some endpoints

app.use("/api",apiRoutes);
app.use("/api",apiRoutes);

//serve out our app

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("example app listening on", host,port);
});