'use strict';

module.exports = function(environment) {
	let ENV = {
		modulePrefix: 'reggina',
		environment,
		rootURL: '/',
		apiNamespace: process.env.API_NAMESAPCE,
		apiUrl: process.env.API_URL,
		apiAuthRoute: process.env.TOKEN_ROUTE,
		apiRegisterRoute: process.env.REGISTER_ROUTE,
		company_id: '1',		
		locationType: 'auto',
		'ember-cli-notifications': {
			includeFontAwesome: true,
			autoClear: true,
			clearDuration: 5000,
			cssClasses: 'notifika'
		},	  
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
      ENV.apiUrl = process.env.API_URL;
      ENV.apiNamespace=process.env.API_NAMESPACE;
      ENV.apiAuthRoute=process.env.TOKEN_ROUTE;
	  ENV.apiRegisterRoute= process.env.REGISTER_ROUTE;
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
      // ENV.APP.LOG_VIEW_LOOKUPS = true;
ENV['ember-cli-mirage'] = {
    enabled: false
  };
  }


  if (environment === 'test') {
      // Testem prefers this...
      ENV.apiUrl = process.env.API_URL;
      ENV.apiNamespace=process.env.API_NAMESPACE;
      ENV.apiAuthRoute=process.env.TOKEN_ROUTE;
	  ENV.apiRegisterRoute= process.env.REGISTER_ROUTE;
      ENV.locationType = 'none';


	  // keep test console output quieter
	  ENV.APP.LOG_ACTIVE_GENERATION = false;
	  ENV.APP.LOG_VIEW_LOOKUPS = false;
	  ENV.APP.rootElement = '#ember-testing';
	  ENV.APP.autoboot = false;
  }


	if (environment === 'production') {
		// here you can enable a production-specific feature
  ENV.apiUrl = process.env.API_URL;
      ENV.apiNamespace=process.env.API_NAMESPACE;
      ENV.apiAuthRoute='customer_auth';
          ENV.apiRegisterRoute= process.env.REGISTER_ROUTE;

	}

	return ENV;
};
