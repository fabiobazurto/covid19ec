import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
    navStacked: 'nav-stacke',
    navRoutes: '',
    stringOptions: '',
    didReceiveAttrs(){
        this._super(...arguments);
        let menuItems=[];
        if(this.get('stringOptions')){
            this.get('stringOptions').split(',').map((option)=>{
                let tmpItem = option.split('|');
                if(tmpItem.length>=2){
                    menuItems.push({name: tmpItem[0], link: tmpItem[1], model: tmpItem[2]});
                }
            });
            this.set('navRoutes', menuItems);
        }
        else{
            menuItems.push({ name: 'Miembros', link:'members'} );
            this.set('navRoutes',menuItems);
        }
    },
    actions:{
        invalidateSession() {
            this.get('session').invalidate();
        }
    }
});
