
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

	it('should disable a key into a datastore object', function() {
		store.disable('admin');
		assert.equal(store.get('admin'), false);
	});

	it('should set scope', function() {
		var other = new Store();
		store.use(toggle, other);
		store.disable('admin');
		store.enable('user');
		assert.equal(other.get('admin'), false);
		assert.equal(other.get('user'), true);		
	});
	
});
