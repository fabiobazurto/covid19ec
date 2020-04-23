import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers'; 
import { setupApplicationTest } from 'ember-qunit';

import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

import createProvinces from '../helpers/create-provinces';
import createMembers from '../helpers/create-members';

module('Acceptance | create member', function(hooks) {

    setupApplicationTest(hooks);
    setupMirageTest(hooks);

    test('visiting new member', async function(assert) {
        await authenticateSession({
            userId: 1,
            accessToken: 'abcdefg123456',
            uuid: '123456',
            client: 'fakeclient',
            expiry: '9999999999',
            fullname: 'Faker Faker'
	});
	await visit('/');

        assert.equal(currentURL(), '/', 'user authenticated');
	
        let provinces = createProvinces(10);
	
        this.set('model',provinces);
        
	await visit('/members/new');
        
        await fillIn('input[name="firstName"]', 'XFabio');
        await fillIn('input[name="lastName"]', 'XBazurto');
        await fillIn('input[name="nationalId"]', '0921679346');

        await click('button.btn-primary');

        assert.equal(currentURL(), '/members/new/demographics', 'demographics OK');
        
        await click('input[name="gender"]:first-child');
        
        await fillIn('select[name="cbo_provinces"]',"2");
        
        await fillIn('input[name="city"]', 'GUAYAQUIL');        
       
        await click('button.gonext');

        assert.equal(currentURL(), '/members/new/isAlive','isAlive OK');        

        await click('input[name="alive"]:first-child');
        
        await click('button.gonext');

        assert.equal(currentURL(), '/members/new/wasPicked','Preguntas OK');

        await click('.sintom');

        await click('button.goFinish');        
        
        assert.equal(currentURL(), '/members/new/confirmation','Finalizando');

	await click('.btn-finish');

        assert.equal(currentURL(), '/members','Cargando miembros');

	const contactrows = this.element.querySelectorAll('.member-row');

        assert.equal(contactrows.length, 1, 'Contando miembros');
	
    });
    
    test('creating existing member', async function(assert) {
        await authenticateSession({
            userId: 1,
            accessToken: 'abcdefg123456',
            uuid: '123456',
            client: 'fakeclient',
            expiry: '9999999999',
            fullname: 'Faker Faker'
	});
	await visit('/');

        assert.equal(currentURL(), '/', 'user authenticated');


	let existingmember = createMembers(1)
	
        let provinces = createProvinces(10);
        this.set('model',provinces);
        
	await visit('/members/new');
        
        await fillIn('input[name="firstName"]', 'XFabio');
        await fillIn('input[name="lastName"]', 'XBazurto');
        await fillIn('input[name="nationalId"]', '0921679346');

        await click('button.btn-primary');

        assert.equal(currentURL(), '/members/new/demographics', 'demographics OK');
        
        await click('input[name="gender"]:first-child');
        await fillIn('select[name="cbo_provinces"]',"2");
        await fillIn('input[name="city"]', 'GUAYAQUIL');        
       
        await click('button.gonext');

        assert.equal(currentURL(), '/members/new/isAlive','isAlive OK');        

        await click('input[name="alive"]:first-child');
        
        await click('button.gonext');

        assert.equal(currentURL(), '/members/new/wasPicked','Preguntas OK');

        await click('.sintom');

        await click('button.goFinish');        
        
        assert.equal(currentURL(), '/members/new/confirmation','Finalizando');

	await click('.btn-finish');

        assert.equal(currentURL(), '/members','Cargando miembros');




	
    });    
});
