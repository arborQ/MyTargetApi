/**
 * AuthorizationController
 *
 * @description :: Server-side logic for managing authorizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
var jwt = require('jsonwebtoken');
var { seacret, expiresIn } = require('../../config/webconfig');
module.exports = {
	login : (req, res) => {
		var { login, password } = req.body;
		if(login === 'arbor' && password === '123'){
			var token = jwt.sign({ id : "1",  login : 'arbor', roles : [ 'users' ], isAdmin : true }, seacret, { expiresIn : expiresIn });
			res.setHeader('authorization', 'JWT ' + token);
			return res.json({ success : true });
		}
		return res.json({ success : false });
	}
};
