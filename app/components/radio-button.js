import Component from '@ember/component';
//import { next } from '@ember/runloop';
//import { computed } from '@ember/object';
export default Component.extend({
    tagName: 'input',
    type: 'radio',
    options: '',
    attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

    htmlChecked: function() {
        return this.get('value') === this.get('checked');
    }.property('value', 'checked'),

    change: function() {
        this.set('checked', this.get('value'));
    },

   /* _updateElementValue: function() {
        next(this, function() {
            this.element.prop('checked', this.get('htmlChecked'));
        });
    }.observes('htmlChecked')
*/
});




