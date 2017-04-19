var Review = require('../models/Reviews');
var Request = require('../models/BusinessRequests');

var reviewController = {

  viewCinemas:function(req, res){

    Review.find({'category': 'Cinema'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewConcerts:function(req, res){

    Review.find({'category': 'Concert'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewEscapeRooms:function(req, res){

    Review.find({'category': 'escape rooms'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewFights:function(req, res){

    Review.find({'category': 'Fight'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewKoras:function(req, res){

    Review.find({'category': 'Kora'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewMalahy:function(req, res){

    Review.find({'category': 'Malahy'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewRace:function(req, res){

    Review.find({'category': 'Race'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewTheatre:function(req, res){

    Review.find({'category': 'Theatre'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },
  viewTrampoline:function(req, res){

    Review.find({'category': 'Concert'},function(err, reviews){
          if(err)
              res.send(err.message);
          else
            res.send(reviews);
            //  res.render('index', {reviews});
      })
  },

	postBusinessReq:  function(req, res){
        var request = new Request();
        request.requesterMail = req.body.requesterMail;
        request.password = req.body.password;
	request.businessName = req.body.businessName;
	request.category = req.body.category;
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
module.exports = reviewController;
