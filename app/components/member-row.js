import Component from '@ember/component';
import {computed} from '@ember/object';
import config from 'reggina/config/environment';

export default Component.extend({

    cdnURL: computed(function(){
        return config.cdnURL;
    }),
    
    gender: computed('member', function(){
        
        return (this.member.gender=='M')?"Masculino":"Femenino";
            
    }),
    icon: computed('member', function(){
        let arrIcon = ['','skull-crossbones', 'skull-crossbones','heartbeat','check-circle']

	return arrIcon[this.member.status];
    }),
    statusName: computed('member', function(){
        let arrIcon = ['','Fallecido Covid', 'Fallecido','Contagiado','Sano']

	return arrIcon[this.member.status];
    }),
    bgcolor: computed('member', function(){
        let arrIcon = ['','plus', 'plus','font-warning','font-danger']

	return arrIcon[this.member.status];
    }),
    
    actions:{
        confirmDeletion: function(member){
            let _self = this;

            if(confirm('Esta seguro de borrar este miembro de familia')){
                member.destroyRecord().then(function(){
                    _self.$().remove();
                    _self.destroy();
                });
//                this.onConfirm(member);

                
                
            }
        }                                       
    }
});
