var passport = require('passport');
var jwt = require('jsonwebtoken');
var { seacret, expiresIn } = require('../../config/webconfig');

module.exports = {
	login : (req, res) => {
		var { login, password } = req.body;
		if(login === 'arbor' && password === '123'){
			var token = jwt.sign({ id : "1",  login : 'arbor', roles : [ 'users' ], isAdmin : true }, seacret, { expiresIn : expiresIn });
			return res.json({ success : true, token : token });
		}
		return res.json({ success : false });
	},

	verify : (req, res) => {
		var { token } = req.body;
		if(!token){
			return res.badRequest();
		}
		console.log('token');
		;console.log(token);
		console.log('seacret')
		console.log(seacret);
		jwt.verify(token, seacret, (err, decoded) => {
			res.ok({ success : !!decoded });
		});
	}
};
