import Component from '@ember/component';

export default Component.extend({
    navStacked: 'nav-stacke',
    navRoutes: [{ name: 'Miembros', link:'members'},

               ],
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
	

    },

});
