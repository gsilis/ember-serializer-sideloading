import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('widget');
  },

  actions: {
    addWidget(options = {}) {
      this.store.createRecord('widget', options)
        .save()
        .then(widget => console.log(`Created widget #${widget.get('id')}!`))
        .catch(error => console.log(`Error! ${error}`));
    },
  },
});

