module.exports = function(app, database) {
  var express = require('express');
  var updateRouter = express.Router();

  updateRouter.get('/:id', function(req, res) {
    res.send({
      update: database.findById('update', req.params.id),
    });
  });

  updateRouter.delete('/:id', function(req, res) {
    if (database.destroy('update', req.params.id)) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  app.use('/api/updates', updateRouter);
};
