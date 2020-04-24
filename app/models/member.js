import DS from 'ember-data';
import Validator from "ember-model-validator/mixins/object-validator";
import { computed } from '@ember/object';
const { Model, attr } = DS;



export default Model.extend(Validator,{
    firstName: attr(),
    lastName:  attr(),
    nationalId: attr(),
    fullName: computed('firstName', 'lastName', function(){
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }),
    status: attr('number'),
    gender: attr('string'),
    province: attr('string'),
    city: attr('string'),
    picked: attr('boolean'),
    alive: attr('boolean'),
    
    validations:{
        nationalId: {
            presence: true,
            custom: [
		{
                    validation: function(key, value){
			//*****************
			if(value){
                            var cad = value;
                            var total = 0;
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
				if (cad.charAt(longitud-1) != total){
                                    return false;
				}
				else{
                                    return true;
				}
                            }
			}
			//****************
			return false;
                    },
                    message: "Cedula invalida"
		},
		{
		    validation: function(key, value){
			return true;
		    },
		    message: "Esta cedula ya se encuentra registra."
		}
	    ],
	},
//    },
        firstName: {
            presence: true
        },
        lastName: {
            presence: true
        },
        gender:{
            presence: true
        },
        status:{
            presence: true
        },
        picked:{
            presence: {
                if: function(key, value, _this) {
                    return false === _this.get("alive");
                }
            }
        },
        alive: {
            presence: true
        },
        province:{
            presence: true
        },
        city:{
            presence: true
        }
    }    
});
