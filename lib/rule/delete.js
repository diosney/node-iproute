var exec = require('child_process').exec;

/**
 * Delete a rule.
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
	var cmd = ['ip', 'rule', 'delete'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('type') && typeof options.type != 'undefined') {
		args = args.concat('type', options.type);
	}
	else {
		args = args.concat('type', rule_types.unicast);
	}

	if (options.hasOwnProperty('from') && typeof options.from != 'undefined') {
		args = args.concat('from', options.from);
	}

	if (options.hasOwnProperty('to') && typeof options.to != 'undefined') {
		args = args.concat('to', options.to);
	}

	if (options.hasOwnProperty('iif') && typeof options.iif != 'undefined') {
		args = args.concat('iif', options.iif);
	}

	if (options.hasOwnProperty('oif') && typeof options.oif != 'undefined') {
		args = args.concat('oif', options.oif);
	}

	if (options.hasOwnProperty('tos') && typeof options.tos != 'undefined') {
		args = args.concat('tos', options.tos);
	}

	if (options.hasOwnProperty('dsfield') && typeof options.dsfield != 'undefined') {
		args = args.concat('dsfield', options.dsfield);
	}

	if (options.hasOwnProperty('fwmark') && typeof options.fwmark != 'undefined') {
		args = args.concat('fwmark', options.fwmark);
	}

	if (options.hasOwnProperty('priority') && typeof options.priority != 'undefined') {
		args = args.concat('priority', options.priority);
	}

	if (options.hasOwnProperty('table') && typeof options.table != 'undefined') {
		args = args.concat('table', options.table);
	}

	if (options.hasOwnProperty('realms') && typeof options.realms != 'undefined') {
		args = args.concat('realms', options.realms);
	}

	if (options.hasOwnProperty('nat') && typeof options.nat != 'undefined') {
		args = args.concat('nat', options.nat);
	}

	/*
	 * Execute command.
	 */
	var cmd_to_exec = cmd.concat(args).join(' ');

	// Its needed to flush the routing cache for the changes to become active.
	cmd_to_exec += '&& ip route flush cache';

	exec(cmd_to_exec, function (error, stdout, stderror) {
		if (error) {
			cb(stderror.replace(/\n/g, '') + '. Executed command line: ' + cmd_to_exec);
		}
		else {
			cb(null);
		}
	});
};