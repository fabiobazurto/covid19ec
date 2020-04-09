import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    controllerName: 'new',
    model(){
	return RSVP.hash({
	    member: 	this.modelFor('members.new'),
	    provinces: this.store.findAll('province'),
	});

	
    }
    
});
