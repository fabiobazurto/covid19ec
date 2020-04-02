import Component from '@ember/component';
import { inject as service} from '@ember/service';
import config from 'reggina/config/environment';
import fetch from 'fetch';

export default Component.extend({
	session: service(),
	isRegister: false,
	myErrors: null,
	showLoading: 'novisible',
	router: service(),
	actions:{
		authenticateRN(){
			this.set('showLoading','isvisible');			
			let credentials = this.getProperties('login', 'password');
			let _me = this;
			this.get('session').authenticate('authenticator:oauth2', credentials).catch((reason) => {
				let error = (JSON.parse(reason));
				_me.set('showLoading','novisible');
				this.set('myErrors', error);
				_me.get('myErrors').errors.forEach(function(error){
					_me.get('notifications').error(error);
				});
				
			});
			this.set('showLoading','novisible');
			if(this.get('myErrors')!=undefined){

			}

		},
		registerRN(){
			let new_user = this.getProperties('firstname', 'lastname', 'login','password','confirmpassword');
			let _url = [config.apiUrl, config.apiNamespace, config.apiRegisterRoute].join('/');
			let _me = this;

			this.set('showLoading','isvisible');
			
			return fetch(_url,{
                method:'post',
				mode:'cors',
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				},
				body:JSON.stringify({
					email:    new_user.login,
					password: new_user.password,
					password_confirmation: new_user.password,
					first_name: new_user.firstname,
					last_name: new_user.lastname,
					company_id: config.company_id
				})
			}).then(function(response){
				return response.json();
			}).then(function(data){
				_me.set('showLoading','novisible');
				if (data.status != "success") {
					let err = {errorMessage:'', errors: data.errors.full_messages};
					_me.set('myErrors',err );
					if(_me.get('myErrors')!=undefined){
						_me.get('myErrors').errors.forEach(function(error){
							_me.get('notifications').error(error);
						});
					}
					return;
				}else{ //SUCCESS
					_me.router.transitionTo('login');					
				}
				
			}).catch(function(error){
				_me.set('myErrors', error);
				if(_me.get('myErrors')!=undefined){
					_me.get('notifications').error(_me.get('myErrors').message);
				}
			});
		}
    }
});
