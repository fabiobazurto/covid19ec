'use strict';

module.exports = function(environment) {
    let ENV = {
	modulePrefix: 'reggina',
	environment,
	rootURL: '/',
	cdnURL:'https://res.cloudinary.com/dystx9a3s/image/upload/v1587770234/rec/',
	apiNamespace: process.env.API_NAMESAPCE,
	apiUrl: process.env.API_URL,
	apiAuthRoute: process.env.TOKEN_ROUTE,
	apiRegisterRoute: process.env.REGISTER_ROUTE,
	canEdit: 1,
	canReportDead: 1,
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
	ENV.cdnURL='';
	ENV.apiUrl = process.env.API_URL;
	ENV.apiNamespace=process.env.API_NAMESPACE;
	ENV.apiAuthRoute=process.env.TOKEN_ROUTE;
	ENV.apiRegisterRoute= process.env.REGISTER_ROUTE;
	ENV.canEdit=process.env.CAN_EDIT;
	ENV.canReportDead=process.env.CAN_REPORT_DEAD;	
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
      ENV.apiUrl = '';
      ENV.apiNamespace='api/v1';
      ENV.apiAuthRoute='auth/sign_in/';
	    ENV.apiRegisterRoute= 'auth';
      ENV.locationType = 'none';

      ENV['ember-cli-mirage'] = {
          enabled: true
      };

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
	ENV.apiAuthRoute=process.env.TOKEN_ROUTE;
        ENV.apiRegisterRoute= process.env.REGISTER_ROUTE;
	ENV.cdnURL=process.env.CDN_URL;
	ENV.canEdit=process.env.CAN_EDIT;
	ENV.canReportDead=process.env.CAN_REPORT_DEAD;
	
    }

	return ENV;
};
