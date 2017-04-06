var Request = require('../models/BusinessRequests');


var visitorController = {


postBusinessReq:  function(req, res){
        var request = new Request();
        request.requesterMail = req.body.requesterMail;
        request.password = req.body.password;
	request.businessName = req.body.businessName;
        request.cardNumber = req.body.cardNumber;
        request.holderName = req.body.holderName;
        request.cvv = req.body.cvv;
        request.validdate = req.body.validdate;
        request.description = req.body.description;
	//res.send("" +request);
        request.save(function(err){
             if (err) {
                 res.send("Cannot create");
                }else{
                    res.send("Created Successfuly");
                }
            });
    }
}
module.exports = visitorController;
