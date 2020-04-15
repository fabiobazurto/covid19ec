import Route from '@ember/routing/route';

export default Route.extend({
    controllerName:'new',
    redirect(member) {
        if (!member.get('nationalId')) {
            this.transitionTo('members.new.general');
        }
    },    
    model(){
	return this.store.createRecord('member');
    }
    
});

