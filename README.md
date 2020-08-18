# Covid-19 Patient register FrontEnd

You can enter and register your relatives with covid

https://rescate.herokuapp.com/

Or, if you want to replicate this webapp into your neighborhood.


## Requirements

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm) Preferred: >=11
* [Ember CLI](https://ember-cli.com/) Using: 3.12
* [Google Chrome](https://google.com/chrome/) (In order to use firefox for testeing, you could change testem.js)

## Installation

* `git clone https://github.com/fabiobazurto/covid19ec.git
* `cd covid19ec`
* `npm install`

### Declare Environment variables

```
export API_NAMESPACE = 'api/v1'
export API_URL = 'https://rescatec-api.herokuapp.com/'
export CAN_EDIT = 0
export CAN_REPORT_DEAD = 0
export CDN_URL = 'https://res.cloudinary.com/dystx9a3s/image/upload/v1587770234/rec/'
export REGISTER_ROUTE = 'auth'
export TOKEN_ROUTE = 'auth/sign_in'

```

## Running / Development

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Deploying

Before you deploy the project you need to declare environment variables. If you are going to deploy to HEROKU, you could declare this variables into the advanced configuration app page.

* API_URL: API domain address e.g.: http://10.45.100.6 or http://youremberdomain.com (mandatory)
* API_NAMESPACE: This variable contains your API's namespace e.g.: /api/v1, /v1, or blank if you are not versioning your API.
* TOKEN_ROUTE: endpoint where your api serves the token to authenticate the users. (mandatory)
* REGISTER_ROUTE: endpoint your api will use to send registration form parameters.
