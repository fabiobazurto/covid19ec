import Base from 'ember-simple-auth/authenticators/base';
import config from 'reggina/config/environment';
import { Promise } from 'rsvp';
import { isEmpty } from '@ember/utils';
import { run } from '@ember/runloop';
import { resolve } from 'rsvp';
import $ from 'jquery';

const host = config.apiUrl || '';
const namespace = config.apiNamespace;
const verbo = config.apiAuthRoute;
const serverTokenEndpoint = [ host, namespace, verbo ];

export default Base.extend({
    serverTokenEndpoint: serverTokenEndpoint.join('/'),
    restore: function(data) {
		return new Promise(function(resolve, reject){
			if(!isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
    },
    authenticate: function(options) {
	return new Promise((resolve, reject) => {
            $.ajax({
                url: this.serverTokenEndpoint,
                type: 'POST',
                crossDomain: true,
                data: JSON.stringify({
                email:    options.login,
                password: options.password
		}),
		contentType: 'application/json',
            }).then(function(response, textStatus, jqXHR){
		run(function(){
                    resolve({
                        token: jqXHR.getResponseHeader('access-Token'),
                        accessToken: jqXHR.getResponseHeader('access-Token'),
                        uuid: jqXHR.getResponseHeader('uid'),
                        client: jqXHR.getResponseHeader('client'),
                        expiry: jqXHR.getResponseHeader('expiry'),
                        fullname: response.data.name
                    });
                });
             }, function(xhr){//, status, error) {
		var response = xhr.responseText;
		run(function(){
                   reject(response);
		});
            });
        });
    },
	invalidate: function() {
		return resolve();
	}
});
