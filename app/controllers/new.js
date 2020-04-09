import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
	stepone(member){
	    debugger
	    let cad = member.nationalId.trim();
            let total = 0;
            const longitud = cad.length;
            let longcheck = longitud - 1;
	    let i =0;
            if (cad !== "" && longitud === 10){
		for(i = 0; i < longcheck; i++){
		    if (i%2 === 0) {
			var aux = cad.charAt(i) * 2;
			if (aux > 9) aux -= 9;
			total += aux;
		    } else {
			total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
		    }
		}

		total = total % 10 ? 10 - total % 10 : 0;

		if (cad.charAt(longitud-1) == total && member.firstName.trim().length>0 && member.lastName.trim().length>0) {
		     this.transitionToRoute('members.new.demographics');
		}else{
		    return false;
		}
            }
	},
	submitForm(member){
	    member.save();
	    this.transitionToRoute('members.new.confirmation');
	},
	closeForm(model){
	    model.deleteRecord();
	    this.transitionToRoute('members.index');	    
	}
    }
});
