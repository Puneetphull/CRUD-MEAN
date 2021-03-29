const passport = require('passport');
const  express = require('express');
var approuter  =  express();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.serializeUser(function(user,done){
 done (null,user);
})

passport.deserializeUser(function(user,done){
  done (null,user);
})

passport.use(new GoogleStrategy({

  clientID:"66777002200-vnh2nt3oiv607olg4018q1vog3elsrpk.apps.googleusercontent.com",

  clientSecret:"zeZq4zLKtnnqKkAPadQ6CELH",

  callbackURL:"http://localhost:3000/auth/google/callback"


},
  function(accessToken,refreshToken,profile,done){

    console.log(accessToken),
    console.log(refreshToken),
    console.log(profile)
    return done(null,profile);
  }

));


//approuter.use(passport.initialize());
//approuter.use(passport.session());
approuter.get("/auth/google",passport.authenticate("google",{scope:['profile' ,'email']}));

approuter.get("/auth/google/callback",passport.authenticate("google"));

approuter.get('/', (req, res) => res.send(`Welcome ${req.user.displayName}!`))


