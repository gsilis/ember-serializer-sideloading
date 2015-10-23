import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  createdAt: attr('date'),

  widget: belongsTo('widget', { async: true }),
});

