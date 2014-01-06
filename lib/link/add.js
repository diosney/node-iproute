var exec = require('child_process').exec;

/**
 * Add virtual link.
 *
 * @param options
 * @param cb
 */
module.exports = function (options, cb) {
	/*
	 * Build cmd to execute.
	 */
	var cmd = ['ip', 'link', 'add'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options) {
		if (options.hasOwnProperty('dev')) {
			args = args.concat('link', options.dev);
		}

		// This operation is not recommended if the device is running or has some addresses already configured.
		if (options.hasOwnProperty('name')) {
			args = args.concat('name', options.name);
		}

		if (options.hasOwnProperty('type')) {
			args = args.concat('type', options.type);
		}

		if (options.hasOwnProperty('numtxqueues')) {
			args = args.concat('numtxqueues', options.numtxqueues);
		}

		if (options.hasOwnProperty('numrxqueues')) {
			args = args.concat('numrxqueues', options.numrxqueues);
		}
	}

	/*
	 * Execute command.
	 */
	exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
		if (error) {
			if (cb && typeof cb == 'function') {
				cb(new Error(stderror));
			}
			else {
				throw new Error(stderror);
			}
		}
		else {
			if (cb && typeof cb == 'function') {
				cb(null);
			}
		}
	});
};