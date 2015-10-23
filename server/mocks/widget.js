module.exports = function(app) {
  var express = require('express');
  var widgetRouter = express.Router();

  widgetRouter.get('/', function(req, res) {
    res.send({
      'widget': []
    });
  });

  widgetRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  widgetRouter.get('/:id', function(req, res) {
    res.send({
      'widget': {
        id: req.params.id
      }
    });
  });

  widgetRouter.put('/:id', function(req, res) {
    res.send({
      'widget': {
        id: req.params.id
      }
    });
  });

  widgetRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/widget', widgetRouter);
};
