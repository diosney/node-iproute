var exec = require('child_process').exec;

/**
 * Add a new protocol address.
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
	var cmd = ['ip', 'address', 'add'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('address') && typeof options.address != 'undefined') {
		args = args.concat(options.address);
	}

	if (options.hasOwnProperty('dev') && typeof options.dev != 'undefined') {
		args = args.concat('dev', options.dev);
	}

	if (options.hasOwnProperty('local') && typeof options.local != 'undefined') {
		args = args.concat('local', options.local);
	}

	if (options.hasOwnProperty('peer') && typeof options.peer != 'undefined') {
		args = args.concat('peer', options.peer);
	}

	if (options.hasOwnProperty('broadcast') && typeof options.broadcast != 'undefined') {
		args = args.concat('broadcast', options.broadcast);
	}

	if (options.hasOwnProperty('label') && typeof options.label != 'undefined') {
		args = args.concat('label', options.label);
	}

	if (options.hasOwnProperty('scope') && typeof options.scope != 'undefined') {
		args = args.concat('scope', options.scope);
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