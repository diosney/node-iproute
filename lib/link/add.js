var exec = require('child_process').exec;

/**
 * Add virtual link.
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
	var cmd = ['ip', 'link', 'add'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('link') && typeof options.link != 'undefined') {
		args = args.concat('link', options.link);
	}

	if (options.hasOwnProperty('name') && typeof options.name != 'undefined') {
		args = args.concat('name', options.name);
	}

	if (options.hasOwnProperty('txqueuelen') && typeof options.txqueuelen != 'undefined') {
		args = args.concat('txqueuelen', options.txqueuelen);
	}

	if (options.hasOwnProperty('address') && typeof options.address != 'undefined') {
		args = args.concat('address', options.address);
	}

	if (options.hasOwnProperty('broadcast') && typeof options.broadcast != 'undefined') {
		args = args.concat('broadcast', options.broadcast);
	}

	if (options.hasOwnProperty('mtu') && typeof options.mtu != 'undefined') {
		args = args.concat('mtu', options.mtu);
	}

	if (options.hasOwnProperty('numtxqueues') && typeof options.numtxqueues != 'undefined') {
		args = args.concat('numtxqueues', options.numtxqueues);
	}

	if (options.hasOwnProperty('numrxqueues') && typeof options.numrxqueues != 'undefined') {
		args = args.concat('numrxqueues', options.numrxqueues);
	}

	if (options.hasOwnProperty('type') && typeof options.type != 'undefined') {
		args = args.concat('type', options.type);
	}

	/*
	 * An array of {key: value} par.
	 */
	if (options.hasOwnProperty('type_args') && typeof options.type_args != 'undefined') {
		for (var i = 0, j = options.type_args.length; i < j; i++) {
			var key = Object.keys(options.type_args[i])[0];
			value = options.type_args[i][key];

			args = args.concat(key, value);
		}
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