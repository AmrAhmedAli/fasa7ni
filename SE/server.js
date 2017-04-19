var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var router =require ('./app/routes')  ;
//create application
var app= express();
var path =require ('path')  ;



//Add middleware necessary for REST API'
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+ '/views'));


app.use(router);


/*
var http =require ("http");

// link for the webiste ===> http.get({host:"www.cultnat.org"},function(res){
 http.get({host:"www.cultnat.org"},function(res){

if(res.statusCode==200)
console.log("This site is up and running!") ;

else 
console.log("This site might be broken down" +res.statusCode)  ;




});

*/

//CORS Support
/*app.use(function(req, res ,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});




*/

var cons=require('consolidate')  ; 

app.engine('html',cons.swig)  ;
app.set('views',path.join(__dirname,'views')) ;
app.set('view engine' ,'html') ;



//app.set('layana', 'ejs') ; 



//Connect to MongoDB

//mongoose.connect('mongodb://localhost/BREAKOUT');
mongoose.connect('mongodb://localhost/fassa7ni');

mongoose.connection.once('open',function(){


//Load the models
app.models=require('./app/models/User');


app.models=require('./app/models/Rating');

app.models=require('./app/models/Maintenance');



app.models=require('./app/models/ServiceProvider');
app.models=require('./app/models/Business')


  console.log('listening on port 3000 ... ') ;
 app.listen(3000);  


});
