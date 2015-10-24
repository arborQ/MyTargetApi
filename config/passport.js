var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    // User.findOneById(id).done(function (err, user) {
    //     done(err, user);
    // });

    done(null, { id : 1,  login : 'arbor' });
});

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password'
    },
    function(login, password, done) {
      console.log('try');
      console.log(login);
      console.log(password);
      if(login === 'arbor' && password === '123'){
        return done(null, { id : 1,  login : 'arbor' })
      }else{
        return done(null, false, { message: 'Invalid login or password' });
      }

    // User.findOne({ email: email}).done(function(err, user) {
    //       if (err) { return done(err); }
    //         if (!user) { return done(null, false, { message: 'Unknown user ' + email }); }
    //         if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
    //         return done(null, user);
    //     });
    }
));
