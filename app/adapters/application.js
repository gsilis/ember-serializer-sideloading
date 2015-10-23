import DS from 'ember-data';

export default DS.JSONAdapter.extend({
  namespace: 'api',
});

