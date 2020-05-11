import * as api from 'api.js';

export function post(req, res) {
	api.post('account/login', req.body).then(response => {
		if (response) req.session.user = response;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(response));
	});
}