import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.all('widget');
  },

  actions: {
    addWidget(options = {}) {
      this.store.createRecord('widget', options)
        .save()
        .then(widget => alert(`Created widget #${widget.get('id')}!`))
        .catch(error => alert(`Error! ${error}`));
    },

    destroyWidget(widget) {
      widget.destroyRecord()
        .then(() => alert('Destroyed a widget!'))
        .catch(error => alert(`Error! ${error}`));
    },
  },
});

