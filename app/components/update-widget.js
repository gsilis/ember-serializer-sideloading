import Ember from 'ember';

export default Ember.Component.extend({
  widget: null,
  actions: {
    update() {
      const widget = this.get('widget');

      widget.save().then(() => {
        console.log('Widget was updated');
      }).catch((error) => {
        console.log('Could not update the widget', error);
      });
    },

    destroy() {
      const widget = this.get('widget');

      widget.destroyRecord().then(() => {
        console.log('Widget destroyed');
      }).catch(() => {
        console.log('Widget could not be destoryed');
      });
    }
  },
});
