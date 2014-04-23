
/**
 * toggle constructor.
 * @api public
 */

module.exports = function toggle(ctx) {

	ctx.enable = function(key) {
		ctx.set(key, true);
	};

	ctx.disable = function() {

	};
};

