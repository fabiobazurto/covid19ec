import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    firstName() { return faker.name.firstName();},
    lastName() { return faker.name.lastName(); },
    nationalId() { return "0921679346";},
    status(){ return faker.random.arrayElement([1,2,3,4])}
});
