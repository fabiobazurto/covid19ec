import { helper } from '@ember/component/helper';

export function stepStatus(params/*, hash*/) {
    let current_step = params[0];
    let step = params[1];
    let cssS='';
    if(step<current_step){
        cssS='done';
    }
    if(step==current_step){
        cssS='current';
    }    
  return cssS;
}

export default helper(stepStatus);




