var passport = require("passport");
module.exports = function(req, res, next) {
  var auth = passport.authenticate("jwt", function(error, isValid){
    if(isValid){
      next();
   }else{
     res.forbidden();
   }
 });

 auth(req, res);
};
