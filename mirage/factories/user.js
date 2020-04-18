import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    firstname() { return faker.name.firstName();},
    lastname() { return faker.name.lastName(); },
    email() { return faker.internet.email;},
    password(){ return faker.internet.password}
});

  
