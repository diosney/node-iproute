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
	if (options.hasOwnProperty('address')) {
		args = args.concat('address', options.address);
	}

	if (options.hasOwnProperty('dev')) {
		args = args.concat('dev', options.dev);
	}

	if (options.hasOwnProperty('local')) {
		args = args.concat('local', options.local);
	}

	if (options.hasOwnProperty('peer')) {
		args = args.concat('peer', options.peer);
	}

	if (options.hasOwnProperty('broadcast')) {
		args = args.concat('broadcast', options.broadcast);
	}

	if (options.hasOwnProperty('broadcast')) {
		args = args.concat('broadcast', options.broadcast);
	}

	if (options.hasOwnProperty('label')) {
		args = args.concat('label', options.label);
	}

	if (options.hasOwnProperty('scope')) {
		args = args.concat('scope', options.scope);
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