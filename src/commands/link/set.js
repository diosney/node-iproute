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

  var ip_cmd = (options.sudo)
    ? 'sudo'
    : '';

  /*
   * Build cmd to execute.
   */
  var cmd = [ip_cmd, 'ip', 'link', 'set'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.dev != 'undefined') {
    args = args.concat(options.dev);
  }
  else if (typeof options.group != 'undefined') {
    args = args.concat('group', options.group);
  }

  if (typeof options.state != 'undefined') {
    args = args.concat(options.state.toLowerCase());
  }

  if (typeof options.arp != 'undefined') {
    args = args.concat('arp', options.arp);
  }

  if (typeof options.dynamic != 'undefined') {
    args = args.concat('dynamic', options.dynamic);
  }

  if (typeof options.multicast != 'undefined') {
    args = args.concat('multicast', options.multicast);
  }

  if (typeof options.allmulticast != 'undefined') {
    args = args.concat('allmulticast', options.allmulticast);
  }

  if (typeof options.promisc != 'undefined') {
    args = args.concat('promisc', options.promisc);
  }

  if (typeof options.trailers != 'undefined') {
    args = args.concat('trailers', options.trailers);
  }

  if (typeof options.txqueuelen != 'undefined') {
    args = args.concat('txqueuelen', options.txqueuelen);
  }

  if (typeof options.name != 'undefined') {
    args = args.concat('name', options.name);
  }

  if (typeof options.address != 'undefined') {
    args = args.concat('address', options.address);
  }

  if (typeof options.broadcast != 'undefined') {
    args = args.concat('broadcast', options.broadcast);
  }

  if (typeof options.mtu != 'undefined') {
    args = args.concat('mtu', options.mtu);
  }

  if (typeof options.netns != 'undefined') {
    args = args.concat('netns', options.netns);
  }

  if (typeof options.alias != 'undefined') {
    args = args.concat('alias', options.alias);
  }

  if (typeof options.alias != 'undefined') {
    args = args.concat('alias', options.alias);
  }

  if (typeof options.vf != 'undefined') {
    args = args.concat('vf', options.vf);

    if (typeof options.vf_mac != 'undefined') {
      args = args.concat('vf_mac', options.vf_mac);
    }

    if (typeof options.vf_vlan != 'undefined') {
      args = args.concat('vf_vlan', options.vf_vlan);

      if (typeof options.vf_qos != 'undefined') {
        args = args.concat('vf_qos', options.vf_qos);
      }
    }

    if (typeof options.vf_rate != 'undefined') {
      args = args.concat('vf_rate', options.vf_rate);
    }

    if (typeof options.vf_spoofchk != 'undefined') {
      args = args.concat('vf_spoofchk', options.vf_spoofchk);
    }
  }

  if (typeof options.master != 'undefined') {
    args = args.concat('master', options.master);
  }

  if (typeof options.nomaster != 'undefined') {
    args = args.concat(options.nomaster);
  }

  /*
   * Execute command.
   */
  exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
    if (error) {
      var err = new Error(stderror.replace(/\n/g, ''));
      err.cmd = cmd.concat(args).join(' ');
      err.code = error.code;

      cb(err);
    }
    else {
      cb(null);
    }
  });
};