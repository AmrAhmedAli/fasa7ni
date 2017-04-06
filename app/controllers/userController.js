let Offers = require('../models/Offers');
var flash = require('connect-flash');
let offersController = {

    getAllOffers:function(req, res){

        Offers.find(function(err, offers){

            if(err)
                res.send(err.message);
            else if(offers.length==0)
            {
              return res.status(401).send("No offers available");
            }
            else
                res.render('viewOffers', {offers});
        })
    }


}

module.exports = offersController;



