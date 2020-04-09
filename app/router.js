import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('members', function() {
    this.route('new', function() {
      this.route('general');
      this.route('isAlive');
      this.route('hasSymptoms');
      this.route('deathCause');
      this.route('wasPicked');
      this.route('whereToPick');
      this.route('demographics');
      this.route('confirmation');
    });
  });
});

export default Router;
