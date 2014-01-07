var exec = require('child_process').exec;

/**
 * Change device attributes.
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
	var cmd = ['ip', 'link', 'set'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options.hasOwnProperty('dev')) {
		args = args.concat(options.dev);
	}
	else if (options.hasOwnProperty('group')) {
		args = args.concat('group', options.group);
	}

	if (options.hasOwnProperty('state')) {
		args = args.concat('state');
	}

	if (options.hasOwnProperty('arp')) {
		args = args.concat('arp', options.arp);
	}

	if (options.hasOwnProperty('dynamic')) {
		args = args.concat('dynamic', options.dynamic);
	}

	if (options.hasOwnProperty('multicast')) {
		args = args.concat('multicast', options.multicast);
	}

	if (options.hasOwnProperty('allmulticast')) {
		args = args.concat('allmulticast', options.allmulticast);
	}

	if (options.hasOwnProperty('promisc')) {
		args = args.concat('promisc', options.promisc);
	}

	if (options.hasOwnProperty('trailers')) {
		args = args.concat('trailers', options.trailers);
	}

	if (options.hasOwnProperty('txqueuelen')) {
		args = args.concat('txqueuelen', options.txqueuelen);
	}

	if (options.hasOwnProperty('name')) {
		args = args.concat('name', options.name);
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

	if (options.hasOwnProperty('netns')) {
		args = args.concat('netns', options.netns);
	}

	if (options.hasOwnProperty('alias')) {
		args = args.concat('alias', options.alias);
	}

	if (options.hasOwnProperty('alias')) {
		args = args.concat('alias', options.alias);
	}

	if (options.hasOwnProperty('vf')) {
		args = args.concat('vf', options.vf);

		if (options.hasOwnProperty('vf_mac')) {
			args = args.concat('vf_mac', options.vf_mac);
		}

		if (options.hasOwnProperty('vf_vlan')) {
			args = args.concat('vf_vlan', options.vf_vlan);

			if (options.hasOwnProperty('vf_qos')) {
				args = args.concat('vf_qos', options.vf_qos);
			}
		}

		if (options.hasOwnProperty('vf_rate')) {
			args = args.concat('vf_rate', options.vf_rate);
		}

		if (options.hasOwnProperty('vf_spoofchk')) {
			args = args.concat('vf_spoofchk', options.vf_spoofchk);
		}
	}

	if (options.hasOwnProperty('master')) {
		args = args.concat('master', options.master);
	}

	if (options.hasOwnProperty('nomaster')) {
		args = args.concat(options.nomaster);
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