var async = require('async');

module.exports = function(app,passport) {

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

  app.get('/login', function(req, res) {
    res.status(200).json({status:false,info:'Authentication failed!'});
  });


  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.get('/signup', function(req, res) {
    res.status(200).json({status:false,info:'Signup  failed!'});
  });

  app.get('/signup', function(req, res) {
    res.status(200).json({status:false,info:'Signup  failed!'});
  });

  // process the signup form
  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) { return res.status(500).json({status:false,info:"Try again later!"}); }
      if (!user) { return res.status(500).json({status:false,info:"User already registered!"}); }
      res.status(500).json({status:false,info:"User successfully registered!"});
    })(req, res, next);
  });

  // send to facebook to do the authentication
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));
  app.get('/profile', function(req, res) {
    res.status(200).json({status:false,info:'social signup  success!'});
  });


  // google ---------------------------------

  // send to google to do the authentication
  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));

  // twitter --------------------------------

  // send to twitter to do the authentication
  app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

  // handle the callback after twitter has authorized the user
  app.get('/connect/twitter/callback',
    passport.authorize('twitter', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));

};
