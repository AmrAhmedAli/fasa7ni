let Business = require('../models/Business');
let cinema = require('../models/Cinema');
let fight = require('../models/Fight');
let kora = require('../models/Kora');
let malahy = require('../models/Malahy');
let race = require('../models/Race');
let escapeRoom = require('../models/EscapeRoom');
let trampoline = require('../models/Trampoline');
let concert = require('../models/Concert');
let theatre = require('../models/Theatre');
let serviceProvider = require('../models/ServiceProvider');


let serviceProviderController = {


    getAllBookings:function(req, res){
      var x ;
      if(req.user.category=='Cinema')
      {
        {cinema.findOne({name:req.user.businessName},function(err, cinema){

            if(err)
                res.send(err.message);
            else if (!cinema)
            return res.status(401).send("No bookings are made yet");
            else{
                x=cinema.booked;
                res.render("viewBookings",{x})
              }
        })
    }
}


else if (req.user.category=='trampoline')
{trampoline.findOne({businessName:req.user.businessName},function(err, trampoline){

    if(err)
        res.send(err.message);
        else if (!trampoline){
        return res.status(401).send("No bookings are made yet");
      }
    else{
           x=trampoline.booked;
        res.render("viewBookings",{x})
      }
})
}
else if (req.user.category=='Kora')
{kora.findOne({businessName:req.user.businessName},function(err, kora){

    if(err)
        res.send(err.message);
        else if (!kora)
        return res.status(401).send("No bookings are made yet");
    else{
         x=kora.booked;
        res.render("viewBookings",{x})
      }
})
}

else if (req.user.category=='Fight')
{fight.findOne({name:req.user.businessName},function(err, fight){

    if(err)
        res.send(err.message);
        else if (!fight){
        return res.status(401).send("No bookings are made yet");}
    else{
      x=fight.booked;
        res.render("viewBookings",{x})
      }
})
}

else if (req.user.category=='Malahy')
{malahy.findOne({businessName:req.user.businessName},function(err, malahy){

    if(err)
        res.send(err.message);
    else if (!malahy){
        return res.status(401).send("No bookings are made yet");}
    else{
         x=malahy.booked;
        res.render("viewBookings",{x})
      }
})
}
else if (req.user.category=='Race')
{race.findOne({businessName:req.user.businessName},function(err, race){

    if(err)
        res.send(err.message);
        else if (!race){
        return res.status(401).send("No bookings are made yet");}
    else{
          x=race.booked;
        res.render("viewBookings",{x})
      }
})
}
else if (req.user.category=="Escape Room")
{escapeRoom.findOne({businessName:req.user.businessName},function(err, escapeRoom){

    if(err)
        res.send(err.message);
        else if (!escapeRoom){
        return res.status(401).send("No bookings are made yet");}
    else{
           x=escapeRoom.booked;
        res.render("viewBookings",{x});
      }

})

}

else if (req.user.category=='Theatre')
{theatre.findOne({name:req.user.businessName},function(err, theatre){

    if(err)
        res.send(err.message);
        else if (!theatre){
        return res.status(401).send("No bookings are made yet");}
    else{
        x=theatre.booked;
        res.render("viewBookings",{x})
      }
})
}

else if (req.user.category=='Concert')
{concert.findOne({name:req.user.businessName},function(err, concert){

    if(err)
        res.send(err.message);
        else if (!concert){
        return res.status(401).send("No bookings are made yet");}
    else{
        x=concert.booked;
        res.render("viewBookings",{x})
      }
})
}


}
}

module.exports = serviceProviderController;
