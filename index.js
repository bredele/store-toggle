
/**
 * Toggle plugins for datastore-like objects.
 *
 * A datastore-like object has at least a set
 * handler to set an object's key with a value.
 *
 * Examples:
 *
 *   store.use(toggle);
 *   // or change scope
 *   store.use(toggle, other);
 *
 * @api public
 */

module.exports = function toggle(ctx, scope) {

	scope = scope || ctx;

	/**
	 * Enable key into a datastore-like
	 * object.
	 *
	 * Examples:
	 *
	 *   store.enable('admin');
	 *   // admin => true
	 *   
	 * @param  {String} key
	 * @return {this}
	 * @api public
	 */
	
	ctx.enable = function(key) {
		scope.set(key, true);
		return this;
	};


	/**
	 * Disable key into a datastore-like
	 * object.
	 *
	 * Examples:
	 *
	 *   store.disable('admin');
	 *   // admin => false
	 *   
	 * @param  {String} key
	 * @return {this}
	 * @api public
	 */
	
	ctx.disable = function(key) {
		scope.set(key, false);
		return this;
	};
};

