import Component from '@ember/component';

export default Component.extend({

    actions:{
        clickMember: function(id){
            console.log('listmember.clickMember()');
            console.log(id);
            return this.onClickMember(id);
        }
    }

});
