var mongoose=require ('mongoose');

var MaintenanceSchema=new mongoose.Schema({

isMaintenance : {
    type:Boolean,
    required:true,
    unique:true , 
    default:false
}



})

var Maintenance= mongoose.model("maintenance",MaintenanceSchema) ;
module.exports=Maintenance ; 









































