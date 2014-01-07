var exec = require('child_process').exec;

/**
 * Delete virtual link.
 *
 * @param options
 * @param cb
 */
module.exports = function (options, cb) {
	if (typeof arguments[0] != 'object'
		|| typeof arguments[1] != 'function') {

		throw new Error('Invalid arguments. Signature: (options, callback)');
	}

	/*
	 * Build cmd to execute.
	 */
	var cmd = ['ip', 'link', 'delete'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('dev')) {
		args = args.concat(options.dev);
	}

	// Also check if is a valid type.
	if (options.hasOwnProperty('type')) {
		args = args.concat('type', options.type);
	}

	/*
	 * An array of {key: value} par.
	 */
	if (options.hasOwnProperty('args')) {
		for (var i = 0, j = options.args.length; i < j; i++) {
			var key = Object.keys(options.args[i])[0];
			value = options.args[i][key];

			args = args.concat(key, value);
		}
	}

	/*
	 * Execute command.
	 */
	exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
		if (error) {
			cb(stderror);
		}
		else {
			cb(null);
		}
	});
};