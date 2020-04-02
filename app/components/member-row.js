import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    icon: computed('member', function(){
        let arrIcon = ['','plus', 'plus','frown-o','heartbeat']

	return arrIcon[this.member.status];
    }),
    bgcolor: computed('member', function(){
        let arrIcon = ['','plus', 'font-success','font-warning','font-danger']

	return arrIcon[this.member.status];
    }),
                   
});
