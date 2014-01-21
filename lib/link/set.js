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
	if (options.hasOwnProperty('dev') && typeof options.dev != 'undefined') {
		args = args.concat(options.dev);
	}
	else if (options.hasOwnProperty('group') && typeof options.group != 'undefined') {
		args = args.concat('group', options.group);
	}

	if (options.hasOwnProperty('state') && typeof options.state != 'undefined') {
		args = args.concat('state', options.state);
	}

	if (options.hasOwnProperty('arp') && typeof options.arp != 'undefined') {
		args = args.concat('arp', options.arp);
	}

	if (options.hasOwnProperty('dynamic') && typeof options.dynamic != 'undefined') {
		args = args.concat('dynamic', options.dynamic);
	}

	if (options.hasOwnProperty('multicast') && typeof options.multicast != 'undefined') {
		args = args.concat('multicast', options.multicast);
	}

	if (options.hasOwnProperty('allmulticast') && typeof options.allmulticast != 'undefined') {
		args = args.concat('allmulticast', options.allmulticast);
	}

	if (options.hasOwnProperty('promisc') && typeof options.promisc != 'undefined') {
		args = args.concat('promisc', options.promisc);
	}

	if (options.hasOwnProperty('trailers') && typeof options.trailers != 'undefined') {
		args = args.concat('trailers', options.trailers);
	}

	if (options.hasOwnProperty('txqueuelen') && typeof options.txqueuelen != 'undefined') {
		args = args.concat('txqueuelen', options.txqueuelen);
	}

	if (options.hasOwnProperty('name') && typeof options.name != 'undefined') {
		args = args.concat('name', options.name);
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

	if (options.hasOwnProperty('netns') && typeof options.netns != 'undefined') {
		args = args.concat('netns', options.netns);
	}

	if (options.hasOwnProperty('alias') && typeof options.alias != 'undefined') {
		args = args.concat('alias', options.alias);
	}

	if (options.hasOwnProperty('alias') && typeof options.alias != 'undefined') {
		args = args.concat('alias', options.alias);
	}

	if (options.hasOwnProperty('vf') && typeof options.vf != 'undefined') {
		args = args.concat('vf', options.vf);

		if (options.hasOwnProperty('vf_mac') && typeof options.vf_mac != 'undefined') {
			args = args.concat('vf_mac', options.vf_mac);
		}

		if (options.hasOwnProperty('vf_vlan') && typeof options.vf_vlan != 'undefined') {
			args = args.concat('vf_vlan', options.vf_vlan);

			if (options.hasOwnProperty('vf_qos') && typeof options.vf_qos != 'undefined') {
				args = args.concat('vf_qos', options.vf_qos);
			}
		}

		if (options.hasOwnProperty('vf_rate') && typeof options.vf_rate != 'undefined') {
			args = args.concat('vf_rate', options.vf_rate);
		}

		if (options.hasOwnProperty('vf_spoofchk') && typeof options.vf_spoofchk != 'undefined') {
			args = args.concat('vf_spoofchk', options.vf_spoofchk);
		}
	}

	if (options.hasOwnProperty('master') && typeof options.master != 'undefined') {
		args = args.concat('master', options.master);
	}

	if (options.hasOwnProperty('nomaster') && typeof options.nomaster != 'undefined') {
		args = args.concat(options.nomaster);
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