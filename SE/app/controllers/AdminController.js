let Maintenance = require('../models/Maintenance') ; 






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





