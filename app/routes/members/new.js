import Route from '@ember/routing/route';

export default Route.extend({
    controllerName:'new',
    model(){
	return this.store.createRecord('member');
    }
    
});

