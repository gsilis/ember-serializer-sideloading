import Ember from 'ember';

export default Ember.Component.extend({
  model: {},

  actions: {
    addWidget() {
      this.sendAction('addWidget', this.get('model'));
      this._resetModel();
    },
  },

  _resetModel() {
    this.set('model', {});
  },
});

