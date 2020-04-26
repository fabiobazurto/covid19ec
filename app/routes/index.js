import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
/* route.js
beforeModel() {
  return this.store.findAll('member');
},
*/
    model() {
	return this.store.findAll('member');
    },
    actions:{
	destroyMember(member){
	    console.log('route');
	    console.log(member);
	    return true;
	}
    }
    
});
