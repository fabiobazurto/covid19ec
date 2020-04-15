import { helper } from '@ember/component/helper';

export default helper(function hasErrors(params/*, hash*/) {
    let errors = params[0];
    let field = params[1];
    let cssS='';
    if(errors.get('errors.' + field)){
        cssS='error_field';
    }
  return cssS;
});
