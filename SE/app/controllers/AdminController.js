let Maintenance = require('../models/Maintenance') ; 

let User = require('../models/User');


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

res.render('index.html',{task}) ; 


} 

}
 });

};



exports.maintenacemode=function(req,res){

var Maintenance1=new Maintenance(req.body); 

 Maintenance1.remove({}, function(err, task) {
    if (err)
//      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  //  else 
    //res.json(task)  ; 
 });
  


 // var mainta = new Maintenance1();
 // mainta.isMaintenance
//Maintenance1.isMaintenance = true;


  Maintenance1.save(function(err, task) {
    if (err)
      res.send(err);
      //else 
    //res.json(task);
      //});
     



Maintenance.findOneAndUpdate({isMaintenance:false},true, {new: true}, function(err, task) {
 
    if (err)
      //console.log(err) ;
      //console.log(task)  ;
      res.render(err); 
      //res.json(err) ; 
// res.render('404.ejs') ; 
  
      else
      res.render(task); 
      
 });

});
};





