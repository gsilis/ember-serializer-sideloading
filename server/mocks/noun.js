module.exports = function(app) {
  var express = require('express');
  var nounRouter = express.Router();

  nounRouter.get('/', function(req, res) {
    res.send({
      'noun': []
    });
  });

  nounRouter.post('/', function(req, res) {
    var body = JSON.parse(req.requestBody);
    body.id = 21;

    res.send(body);
  });

  nounRouter.get('/:id', function(req, res) {
    res.send({
      'noun': {
        id: req.params.id
      }
    });
  });

  nounRouter.put('/:id', function(req, res) {
    res.send({
      'noun': {
        id: req.params.id
      }
    });
  });

  nounRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/noun', nounRouter);
};
