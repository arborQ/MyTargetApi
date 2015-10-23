/**
 * AuthorizationController
 *
 * @description :: Server-side logic for managing authorizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login : function(req, res){
		var { login, password } = req.body;
		if(login === 'arbor' && password === '123'){
    setTimeout(function(){
      res.json({ token : 'token' });
    }, 100);
  }else{
    setTimeout(function(){
      res.json({ success : false });
    }, 2000);
  }
	}
};
