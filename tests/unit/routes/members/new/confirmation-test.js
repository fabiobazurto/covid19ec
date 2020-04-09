import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | members/new/confirmation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:members/new/confirmation');
    assert.ok(route);
  });
});
