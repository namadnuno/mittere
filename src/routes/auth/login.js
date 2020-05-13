import * as api from 'api.js';

export function post(req, res) {
  api
    .post('account/login', req.body)
    .then((response) => {
      console.log(response);
      if (response) req.session.user = response.data;
      res.setHeader('Content-Type', 'application/json');

      res.statusCode = 200;
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.statusCode = 500;
      res.end(JSON.stringify(err));
    });
}
