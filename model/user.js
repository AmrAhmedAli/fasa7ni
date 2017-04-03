var mongoose = require ("mongoose");
var bcrypt = require('bcrypt');

// mongoose.connect('mongodb://localhost/rana');
 //var db =mongoose.connection;

var userSchema = mongoose.Schema({
	username:{
			type:String,
			index:true
	},
	password:{
		type:String
	},
	email:{
		type:String
	},
	name:{
		type:String
	}
});

var User = module.exports =mongoose.model('User',userSchema);

module.exports.createUser= function(newStudent,callback){
	var bcrypt = require('bcryptjs');
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newStudent.password, salt, function(err, hash) {
	        newStudent.password=hash;
	        newStudent.save(callback);
	    });
	});
}

module.exports.getUserByUsername= function(username,callback){
	
	var query ={ username:username };
	User.findOne(query,callback);
}

module.exports.getUserById= function(id,callback){
	
	User.findById(id,callback);
}

module.exports.comparePassword= function(candidatePassword,hash,callback){
	
	bcrypt.compare(candidatePassword, hash,function(err,isMatch){
		if(err) throw err;
		callback(null,isMatch);
	});
}