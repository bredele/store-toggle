
/**
 * toggle constructor.
 * @api public
 */

module.exports = function toggle(ctx, scope) {
	scope = scope || ctx;

	ctx.enable = function(key) {
		scope.set(key, true);
	};

	ctx.disable = function(key) {
		scope.set(key, false);
	};
};

