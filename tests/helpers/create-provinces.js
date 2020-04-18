import { computed } from '@ember/object';
import EmberObject from '@ember/object';

export default function createProvinces(records){
    const contactObjects=[];
    
    for(let i=0;i<records;i++){
        const contactObject = EmberObject.extend({
            name: computed(()=> 'Guayaquil')
        }).create();

        contactObjects.push(contactObject);
    }
    return contactObjects;
}
