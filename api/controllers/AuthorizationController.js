/**
 * AuthorizationController
 *
 * @description :: Server-side logic for managing authorizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
	login : function(req, res){



		passport.authenticate('local', function(err, user, info)
	         {
	            //  if ((err) || (!user))
	            //  {
							// 	 throw "Invalid login 1";
	            //  }

	             req.logIn(user, function(err)
	             {
								 console.log('out :)')
	                 if (err)
	                 {
										 throw "Invalid login 2";
	                 }
	                 return res.json({ ok : true });
	             });
	         })(req, res);






	// 	var { login, password } = req.body;
	// 	if(login === 'arbor' && password === '123'){
  //   setTimeout(function(){
  //     res.json({ token : 'token' });
  //   }, 100);
  // }else{
  //   setTimeout(function(){
  //     res.json({ success : false });
  //   }, 2000);
  // }
	}
};
