# EmberAuth

This repository was extracted from a real project that I'm working on. This is the minimal initial project to begin with your development. The repository includes Ember Simple Authentication implementation against a Rails Heroku API. You should make some changes to serializers and  adapters.

## What I am using

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm) Preferred: >=11
* [Ember CLI](https://ember-cli.com/) Using: 3.12
* [Google Chrome](https://google.com/chrome/) (In order to use firefox for testeing, you could change testem.js)

## Installation

* `git clone https://github.com/fabiobazurto/ember-auth.git
* `cd ember-auth`
* `npm install`

## Running / Development

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`

If your machine doesnt have Chrome installed then you can use 

* `ember test --server`

This command will provide you an URL to test on any web browser. Copy URL and paste it into the browser navigation bar and push enter.


### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Before you deploy the project you need to declare environment variables. If you are going to deploy to HEROKU, you could declare this variables into the advanced configuration app page.

* API_URL: API domain address e.g.: http://10.45.100.6 or http://youremberdomain.com (mandatory)
* API_NAMESPACE: This variable contains your API's namespace e.g.: /api/v1, /v1, or blank if you are not versioning your API.
* TOKEN_ROUTE: endpoint where your api serves the token to authenticate the users. (mandatory)
* REGISTER_ROUTE: endpoint your api will use to send registration form parameters.
