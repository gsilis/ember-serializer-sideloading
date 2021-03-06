import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),

  updates: hasMany('update', { async: true }),
});

