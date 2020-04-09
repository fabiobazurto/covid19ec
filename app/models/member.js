import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model, attr } = DS;

export default Model.extend({
    firstName: attr(),
    lastName:  attr(),
    nationalId: attr(),
    fullName: computed('firstName', 'lastName', function(){
	return `${this.firstName} ${this.lastName}`;
    }),
    status: attr('number'),
    gender: attr('string'),
    province: attr('string'),
    city: attr('string'),
    picked: attr('boolean'),
    alive: attr('boolean'),
});
