import Route from '@ember/routing/route';

export default Route.extend({
// route.js
beforeModel() {
  // using return ensures this hook waits for the promise to resolve before moving on
  return this.store.query('member', { id: 'isPublished' });
},

model() {
  // Queried server data should now be available to peek at locally, 
  // so we can set the model to a live version of it. Don't append filterBy here,
  // otherwise it will no longer be live.
  return this.store.peekAll('member');
}
    //model() {
//	      return this.store.findAll('member',{reload: true});
 //   },
    
});
