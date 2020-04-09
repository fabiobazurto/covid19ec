import Route from '@ember/routing/route';

export default Route.extend({
    controllerName:'new',
    model(){
	return this.modelFor('members.new');
    }
});
