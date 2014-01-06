var exec = require('child_process').exec;
var vl_types = require('./index').vl_types;

/**
 * Delete virtual link.
 *
 * @param options
 * @param cb
 */
module.exports = function (options, cb) {
	/*
	 * Build cmd to execute.
	 */
	var cmd = ['ip', 'link', 'delete'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options) {
		if (options.hasOwnProperty('dev')) {
			args = args.concat('dev', options.dev);
		}

		// Also check if is a valid type.
		if (options.hasOwnProperty('type') && vl_types.indexOf(options.type) != -1) {
			args = args.concat('type', options.type);
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