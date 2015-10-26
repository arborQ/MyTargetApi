var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  JwtStrategy = require('passport-jwt').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, {
    id: 1,
    login: 'arbor'
  });
});
var options = {
  secretOrKey: require('./webconfig').seacret
};
passport.use(new JwtStrategy(options, function(jwt_payload, done) {
  done(null, jwt_payload);
}));

// passport.use(new LocalStrategy({
//         usernameField: 'login',
//         passwordField: 'password'
//     },
//     function(login, password, done) {
//
//       if(login === 'arbor' && password === '123'){
//         return done(null, { id : 1,  login : 'arbor' })
//       }else{
//         return done(null, false, { message: 'Invalid login or password' });
//       }
//     }
// ));
