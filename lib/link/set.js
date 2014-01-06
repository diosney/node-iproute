var exec = require('child_process').exec;

/**
 * Change device attributes.
 *
 * @param options
 * @param cb
 */
module.exports = function (options, cb) {
	/*
	 * Build cmd to execute.
	 */
	var cmd = ['ip', 'link', 'set'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options) {
		if (options.hasOwnProperty('dev')) {
			args = args.concat('dev', options.dev);
		}

		if (options.hasOwnProperty('state')) {
			switch (options.state.toLowerCase()) {
				// Intentional fall-through case style.
				case 'up':
				case 'down':
					args = args.concat('up');
					break;
			}
		}

		if (options.hasOwnProperty('arp')) {
			switch (options.arp.toLowerCase()) {
				// Intentional fall-through case style.
				case 'on':
				case 'off':
					args = args.concat('arp', options.arp);
					break;
			}
		}

		if (options.hasOwnProperty('multicast')) {
			switch (options.multicast.toLowerCase()) {
				// Intentional fall-through case style.
				case 'on':
				case 'off':
					args = args.concat('multicast', options.multicast);
					break;
			}
		}

		if (options.hasOwnProperty('dynamic')) {
			switch (options.dynamic.toLowerCase()) {
				// Intentional fall-through case style.
				case 'on':
				case 'off':
					args = args.concat('dynamic', options.dynamic);
					break;
			}
		}

		// This operation is not recommended if the device is running or has some addresses already configured.
		if (options.hasOwnProperty('name')) {
			args = args.concat('name', options.name);
		}

		if (options.hasOwnProperty('txqueuelen')) {
			args = args.concat('txqueuelen', options.txqueuelen);
		}

		if (options.hasOwnProperty('txqlen')) {
			args = args.concat('txqlen', options.txqlen);
		}

		if (options.hasOwnProperty('mtu')) {
			args = args.concat('mtu', options.mtu);
		}

		if (options.hasOwnProperty('address')) {
			args = args.concat('address', options.address);
		}

		if (options.hasOwnProperty('broadcast')) {
			args = args.concat('broadcast', options.broadcast);
		}

		if (options.hasOwnProperty('peer')) {
			args = args.concat('peer', options.peer);
		}

		if (options.hasOwnProperty('alias')) {
			args = args.concat('alias', options.alias);
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