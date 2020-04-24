import Route from '@ember/routing/route';

import RSVP from 'rsvp';

//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

//export default Route.extend(AuthenticatedRouteMixin,{
export default Route.extend({
    controllerName:'new',
    redirect(model) {
        if (!model.member.get('nationalId')) {
            this.transitionTo('members.new.general');
        }
    },    
    model(){
	
	return RSVP.hash({
            member: 	this.store.createRecord('member'),
            provinces:  this.store.findAll('province')
	});

//	      return this.store.createRecord('member');
    }
    
});

