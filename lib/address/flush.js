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

		throw new Error('Invalid arguments. Signature: options, callback');
	}

	/*
	 * Build cmd to execute.
	 */
	var cmd = ['ip', 'address', 'flush'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('dev') && typeof options.dev != 'undefined') {
		args = args.concat('dev', options.dev);
	}

	if (options.hasOwnProperty('scope') && typeof options.scope != 'undefined') {
		args = args.concat('scope', options.scope);
	}

	if (options.hasOwnProperty('to') && typeof options.to != 'undefined') {
		args = args.concat('to', options.to);
	}

	if (options.hasOwnProperty('label') && typeof options.label != 'undefined') {
		args = args.concat('label', options.label);
	}

	if (options.hasOwnProperty('dynamic') && typeof options.dynamic != 'undefined') {
		args = args.concat('dynamic');
	}

	if (options.hasOwnProperty('permanent') && typeof options.permanent != 'undefined') {
		args = args.concat('permanent');
	}

	if (options.hasOwnProperty('tentative') && typeof options.tentative != 'undefined') {
		args = args.concat('tentative');
	}

	if (options.hasOwnProperty('deprecated') && typeof options.deprecated != 'undefined') {
		args = args.concat('deprecated');
	}

	if (options.hasOwnProperty('primary') && typeof options.primary != 'undefined') {
		args = args.concat('primary');
	}

	if (options.hasOwnProperty('secondary') && typeof options.secondary != 'undefined') {
		args = args.concat('secondary');
	}

	/*
	 * Execute command.
	 */
	exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
		if (error) {
			cb(stderror.replace(/\n/g, '') + '. Executed command line: ' + cmd.concat(args).join(' '));
		}
		else {
			cb(null);
		}
	});
};