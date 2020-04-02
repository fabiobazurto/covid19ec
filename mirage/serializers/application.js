import { RestSerializer } from 'ember-cli-mirage';
// in real app, only import the one you need

export default RestSerializer.extend({
    alwaysIncludeLinkageData: true,

});
