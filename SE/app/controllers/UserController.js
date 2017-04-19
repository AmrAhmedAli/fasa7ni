
var mongoose = require('mongoose') ;
let User = require('../models/User');

let Rating = require('../models/Rating') ;  
let Maintenance = require('../models/Maintenance') ; 



/*
exports.list_all_tasks = function(req, res) {
 User.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


*/
exports.count_a=function(req,res){
 User.count({},function(err,task){
if(err){
  console.log(err) ;
  res.send(err);
  // console.log(User.length) ;
   

}


else{ 

if(task==0){
     console.log(task) ;

    //res.redirect('/index');
//res.json(task);
 //console.log("No users have signed up") ;
 //console.log(User.length)
//res.json({message:"Hello"}) 

}


else{
   console.log(task) ;

//res.render('index.html',{task}) ; 


} 

}
 });

};

/*

process.nextTick(function(){
exports.maintenacemode=function(req,res){

var Maintenance1=new Maintenance(req.body); 

 Maintenance1.remove({}, function(err, task) {
    if (err)
//      res.send(err);


console("successfully deleted"  )  ;
  //   res.json({ message: 'Task successfully deleted' });
  //  else 
    //res.json(task)  ; 
 });
  


 // var mainta = new Maintenance1();
 // mainta.isMaintenance
//Maintenance1.isMaintenance = true;


  Maintenance1.save(function(err, task1) {
    if (err)
    console.log(err);
      //else 
    //res.json(task);
   
   
      //});
     
  });


Maintenance.findOneAndUpdate({"isMaintenance":false}, {$set:{'isMaintenance':true}},{new: true}, function(err, task) {
 
    if (err)
      //console.log(err) ;
      //console.log(task)  ;
      res.render(err); 
      //res.json(err) ; 
// res.render('404.ejs') ; 
  
      else
      res.json(task); 
      
 });




};


}) ;

*/    
  



exports.rate_place= function(req, res) {
  var new_Rating= new Rating();
   new_Rating.place =req.body[0]; 
   new_Rating.rate =req.body[1]; 
     new_Rating.email=req.body[2]; ;
  //console.log( new_Rating.email) ; 
  new_Rating.save(function(err, task) {
    if (err)
     res.send("No rating done");
     //res.json(err) ; 
     else 

    res.send(task);
  });
};




exports.create_a_task = function(req, res) {
  var User1 = new  User (req.body);
  User1.save(function(err, task) {
    if (err)
      res.send(err);
      else 
    res.json(task);
  });
};




/*
exports.read_a_task = function(req, res) {
 User.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


*/

/*
exports.update_a_task = function(req, res) {
  User.findOneAndUpdate(req.params._id, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
  */







/*
exports.delete_a_task = function(req, res) {

  User.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
//    res.json({ message: 'Task successfully deleted' });
  });
};

*/








