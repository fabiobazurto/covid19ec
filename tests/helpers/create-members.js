import { computed } from '@ember/object';
import EmberObject from '@ember/object';

export default function createMembers(records){
    const contactObjects=[];
    
    for(let i=0;i<records;i++){
        const contactObject = EmberObject.extend({
            name: computed(()=> 'Guayaquil'),
	    firstName: computed(()=> 'Fabio'),
	    lastName:  computed(()=> 'Bazurto'),
	    nationalId: computed(()=> '0921679346'),
	    status: computed(()=> '0'),
	    gender: computed(()=> 'M'),
	    province: computed(()=> '1'),
	    city: computed(()=> 'Guayaquil'),
	    picked: computed(()=> true),
	    alive: computed(()=> false),
	    active: computed(()=> true)	    
        }).create();

        contactObjects.push(contactObject);
    }
    return contactObjects;
}
