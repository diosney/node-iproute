var exec = require('child_process').exec;

/**
 * Flush protocol addresses.
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
	var cmd = ['ip', 'address', 'flush'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('dev')) {
		args = args.concat('dev', options.dev);
	}

	if (options.hasOwnProperty('scope')) {
		args = args.concat('scope', options.scope);
	}

	if (options.hasOwnProperty('to')) {
		args = args.concat('to', options.to);
	}

	if (options.hasOwnProperty('label')) {
		args = args.concat('label', options.label);
	}

	if (options.hasOwnProperty('dynamic')) {
		args = args.concat('dynamic');
	}

	if (options.hasOwnProperty('permanent')) {
		args = args.concat('permanent');
	}

	if (options.hasOwnProperty('tentative')) {
		args = args.concat('tentative');
	}

	if (options.hasOwnProperty('deprecated')) {
		args = args.concat('deprecated');
	}

	if (options.hasOwnProperty('primary')) {
		args = args.concat('primary');
	}

	if (options.hasOwnProperty('secondary')) {
		args = args.concat('secondary');
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