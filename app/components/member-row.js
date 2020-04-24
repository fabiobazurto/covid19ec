import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    gender: computed('member', function(){
        
        return (this.member.gender=='M')?"Masculino":"Femenino";
            
    }),
    icon: computed('member', function(){
        let arrIcon = ['','skull-crossbones', 'skull-crossbones','heartbeat','check-circle']

	return arrIcon[this.member.status];
    }),
    bgcolor: computed('member', function(){
        let arrIcon = ['','plus', 'plus','font-warning','font-danger']

	return arrIcon[this.member.status];
    }),
                   
});
