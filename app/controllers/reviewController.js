var Review = require('../models/Reviews');

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
  }
}
module.exports = reviewController;
