import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | User Auth', function(hooks) {
    setupApplicationTest(hooks);
    setupMirageTest(hooks);

    test('No authenticated users cannot visit /', async function(assert) {
	await visit('/');
	assert.equal(currentURL(), '/login', 'user is not on super-secret-url');
    });

    test('authenticated users can visit /super-secret-url', async function(assert) {
	await authenticateSession({
            userId: 1,
            accessToken: 'abcdefg123456',
            uuid: '123456',
            client: 'fakeclient',
            expiry: '9999999999',
            fullname: 'Faker Faker'
	});
	await visit('/');
	assert.equal(currentURL(), '/', 'user is on super-secret-url');
    }); 

    test('register user with errors', async function(assert){
	await visit('/register');
	await fillIn('input[name="firstname"]', '');
	await fillIn('input[name="lastname"]', '');
	await fillIn('input[name="login"]', '');
	await fillIn('input[name="password"]', '1');
	await fillIn('input[name="confirmpassword"]', '');
	await click('button.btn-success');
	assert.equal(currentURL(),'/register');
    });

    test('register user OK', async function(assert){
	await visit('/register');
	await fillIn('input[name="firstname"]', 'Fabio');
	await fillIn('input[name="lastname"]', 'Bazurto');
	await fillIn('input[name="login"]', 'fabio.bazusrto@gmail.com');
	await fillIn('input[name="password"]', 'kame123123');
	await fillIn('input[name="confirmpassword"]', 'kame123123');
	await click('button.btn-success');
	assert.equal(currentURL(),'/login');
    });
});
