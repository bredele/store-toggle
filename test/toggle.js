
/**
 * Tests dependencies.
 */

var assert = require('assert');
var Store = require('datastore');
var toggle = require('..');

describe("Extend datstore", function() {
	var store;
	beforeEach(function() {
		store = new Store();
		store.use(toggle);
	});

	it('should add enable and disable handlers', function() {
		assert(store.enable);
		assert(store.disable);
	});

	it('should enable a key into a datastore object', function() {
		store.enable('admin');
		assert.equal(store.get('admin'), true);
	});
	
});
