var exec = require('child_process').exec;

var parse_links = require('./utils').parse_links;

/**
 * Display device attributes.
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
	var cmd = ['ip', 'link', 'show'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('dev')) {
		args = args.concat('dev', options.dev);
	}
	else if (options.hasOwnProperty('group')) {
		args = args.concat('group', options.group);
	}

	/*
	 * Execute command.
	 */
	exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
		if (error) {
			cb(stderror);
		}
		else {
			/*
			 * Process the output to give parsed results.
			 */
			try {
				var links = parse_links(stdout);

				cb(null, links);
			}
			catch (error) {
				cb(error);
			}
		}
	});
};