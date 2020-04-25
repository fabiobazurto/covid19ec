import Controller from '@ember/controller';
import { computed } from '@ember/object';



export default Controller.extend({
    errors:'',
    finale: false,
    root:'members.new.',
    screens:'',
    validate:'',
    totalScreens: computed('screens', function(){
        var n = this.get('screens.length');
        return n;
    }),
    init: function(){
        this._super();
	this.set('screens',['general','demographics','isAlive','wasPicked' ]);
	this.set('validate',[['firstName','lastName','nationalId'],['gender', 'city', 'province'],['alive'],['status']]);
    },
    current:0,
    
    showNext: computed('current','totalScreens', function(){
        return (this.get('current')+1 < this.get('totalScreens'));
    }),
    showPrevious: computed('current','screens', function(){
        return (this.get('current')-1 >= 0);
    }),

    isDisabled: true,
    
    actions: {

	validateNationalId(member){

		let _self = this;
		let nationalid = member.nationalId;

		this.store.query('member', {
		    filter: {
			nationalId: nationalid
		    }
		}).then(function(members) {
		    console.log(members.length);
		    let _member = members.get('firstObject');

		    if(members.length>0){
			_self.set('errors',{nationalId: [{message:'Cédula ya fue registrada en el sistema.'}]});
			_self.set('isDisabled',true);
			return false;
		    }
		    else{
			_self.set('errors', {});
			_self.set('isDisabled', false);
		    }
		});



	},	
        validateLength(event){
            if (event.target.value.length >= event.target.maxLength){
                event.preventDefault(); //stop character from entering input
                return false;
            }
        },
        validateNumber(event){
            if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
                event.preventDefault(); //stop character from entering input
                return false;
            }
        },
        goPrevious(){
            this.set('current',this.get('current')-1);
            this.transitionToRoute('members.new.' + this.get('screens')[this.get('current')]);
        },
        goNext(member){

            if (member.validate({only: this.get('validate')[this.get('current')]}) || (this.get('current')==0 && this.get('isDisabled')==false ))
            {
                this.set('errors',null);
                this.set('current',this.get('current')+1);
                if(this.get('current')>=this.get('totalScreens')){
                    this.set('finale',true)
                }
                this.transitionToRoute('members.new.' + this.get('screens')[this.get('current')]);
            }
            else{
                this.set('errors',member.get('errors'));
            }
        },
        submitForm(member){
            const _this = this;               
            if(member.validate()){
                member.save().then(
                    //success
                    function(){
                        _this.set('current',_this.get('current')+1);
                        _this.set('finale',true);
                        _this.transitionToRoute('members.new.confirmation');
                    }).catch(
			function(){
                           //console.log(error);
			});
            }
            else
            {
                this.set('errors',member.get('errors'));                
            }
        },
        closeForm(model){
            model.deleteRecord();
            this.transitionToRoute('index');
        }
    }
});
