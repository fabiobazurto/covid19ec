import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'reggina/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin,{
    host: config.apiUrl,
    namespace: config.apiNamespace,
    authorize(xhr) {
        xhr.setRequestHeader('access-token', this.get('session.data.authenticated.accessToken'));
        xhr.setRequestHeader('token', this.get('session.data.authenticated.accessToken'));
        xhr.setRequestHeader('uid', this.get('session.data.authenticated.uuid'));
        xhr.setRequestHeader('expiry', this.get('session.data.authenticated.expiry'));
        xhr.setRequestHeader('client', this.get('session.data.authenticated.client'));
    },

    shouldBackgroundReloadAll() {
        return true;
    },
    shouldReloadAll() {
        return false;
    }    
});
