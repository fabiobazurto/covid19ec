export function initialize(application) {

	['controller', 'component'].forEach(injectionTarget => {
        application.inject(injectionTarget, 'notifications', 'service:notification-messages');
    });
}

export default {
  name: 'inject-notifications',
  initialize
};
