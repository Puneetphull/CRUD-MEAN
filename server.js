require("./node-database/config/db");
const path = require('path');

var express = require("express");
var body = require('body-parser');
var app = express();
app.use(body.urlencoded({extended:true}));
app.use(body.json());
// exports routers
const cors = require('cors');
var apirouter = require("./node-database/routes/routers");
app.use(cors());

app.use(express.static(__dirname+'/dist/website-db/index.html'));
app.use('/',apirouter);

app.get('/*',function(req,res){
  res.sendFile(__dirname+'/dist/website-db/index.html');
})


app.use((req,res,next)=>{
  res.setHeader ('Access-Control-Allow-Origin', '*'),
  res.setHeader('Access-Control-Allow-Credentials', true),
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'),
  res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type, Accept')
});

const port = process.env.PORT || 3000;

app.listen(port,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("server is running successfully"+port);
})
