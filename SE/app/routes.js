
//module.exports={
  // '/user':require('./controllers/UserController'),
//};





var express =require ('express')  ;

var router=express.Router();
var UserCOn= require('./controllers/UserController') ;

//router.get('/tasks',UserCOn.list_all_tasks) ;
//router.post('/create',UserCOn.create_a_task) ;
router.post('/rate',UserCOn.rate_place) ; 
//router.get('/maint',UserCOn.maintenacemode) ; 
router.get('/count',UserCOn.count_a) ; 

//router.get('/task4',UserCOn.read_a_task) ; 
//router.put('/task4',UserCOn.update_a_task); 
//router.delete('/task4',UserCOn.delete_a_task);



router.use('/index',function(req,res){

    res.render('index.ejs') ; 

}) ;

router.use('/index2',function(req,res){
res.render('index2.ejs') ;
});




router.use('/404',function(req,res){
res.render('404.ejs'); 

});




module.exports=router ; 