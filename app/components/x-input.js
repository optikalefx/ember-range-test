import Ember from 'ember';

export default Ember.Component.extend({
  type: 'range',
  tagName: ['input'],
  classNames: ['x-text-input'],
  attributeBindings: ['min', 'max', 'step', 'type', 'name', 'list'],

	change() {
		console.log('should only fire on mouse up');
	},

  input() {
		console.log('should constantly fire');
	}

});
