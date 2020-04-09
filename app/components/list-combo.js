import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    attributeBindings: [ 'name', 'disabled'],
    defaultLabel: '--default--',
    fieldMember:'',
    items:'',
    actions:{
        selectValue(){
            this.set('fieldMember',event.target.value);
        }
    }
});
