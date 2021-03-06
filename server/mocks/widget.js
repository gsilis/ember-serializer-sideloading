module.exports = function(app, database) {
  var express = require('express');
  var widgetRouter = express.Router();

  var addUpdateToWidget = function(database, widget) {
    var update = database.save('update', {
      created_at: (new Date()).toString(),
      widget_id: widget.id,
    });

    var ids = widget.update_ids || [];
    ids.push(update.id);
    ids = ids.map(function(id) {
      return parseInt(id);
    });

    widget.update_ids = ids;
  };

  widgetRouter.get('/', function(req, res) {
    res.send({
      widget: database.all('widget'),
    });
  });

  widgetRouter.post('/', function(req, res) {
    var rawRecord = req.body.widget;
    var record = database.save('widget', rawRecord);

    addUpdateToWidget(database, record);
    res.send({
      widget: record,
    });
  });

  widgetRouter.get('/:id', function(req, res) {
    res.send({
      widget: database.findById('widget', req.params.id),
    });
  });

  widgetRouter.put('/:id', function(req, res) {
    var rawRecord = req.body.widget;
    rawRecord.id = parseInt(req.params.id);
    var record = database.save('widget', rawRecord);
    addUpdateToWidget(database, record);
  
    res.send({
      widget: record,
    });
  });

  widgetRouter.delete('/:id', function(req, res) {
    if (database.destroy('widget', req.params.id)) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  app.use('/api/widgets', widgetRouter);
};
