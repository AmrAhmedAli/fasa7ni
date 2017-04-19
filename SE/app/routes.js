
//module.exports={
  // '/user':require('./controllers/UserController'),
//};





var express =require ('express')  ;

var router=express.Router();
var UserCOn= require('./controllers/UserController') ;
var AdminCOn= require('./controllers/AdminController') ;

var serviceProviderController= require('./controllers/serviceProviderController');

//outer.get('/tasks',UserCOn.list_all_tasks) ;
router.post('/create',UserCOn.create_a_task) ;

router.post('/rate',UserCOn.rate_place) ;
 
//router.get('/maint',UserCOn.maintenacemode) ; 
router.get('/count',AdminCOn.count_a);

router.get('/viewbusinesspage', serviceProviderController.viewBusinessPage);

	router.post('/business', serviceProviderController.addBusiness);


router.put('/ServiceProviderController', serviceProviderController.updateBusiness);

/*
router.get('/index5',function(req,res){
  
var e=req.body ;

    res.sendFile(__dirname+"/public/" +"index.html" +{e});

})
*/

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