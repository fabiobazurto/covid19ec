import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model(){
	return RSVP.hash({
	    member: 	this.modelFor('members.new'),
	    provinces: this.store.findAll('province'),
	});
	
    }

});
