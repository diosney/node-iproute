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
	if (options.hasOwnProperty('link')) {
		args = args.concat('link', options.link);
	}

	if (options.hasOwnProperty('name')) {
		args = args.concat('name', options.name);
	}

	if (options.hasOwnProperty('txqueuelen')) {
		args = args.concat('txqueuelen', options.txqueuelen);
	}

	if (options.hasOwnProperty('address')) {
		args = args.concat('address', options.address);
	}

	if (options.hasOwnProperty('broadcast')) {
		args = args.concat('broadcast', options.broadcast);
	}

	if (options.hasOwnProperty('mtu')) {
		args = args.concat('mtu', options.mtu);
	}

	if (options.hasOwnProperty('numtxqueues')) {
		args = args.concat('numtxqueues', options.numtxqueues);
	}

	if (options.hasOwnProperty('numrxqueues')) {
		args = args.concat('numrxqueues', options.numrxqueues);
	}

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