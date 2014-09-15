var exec = require('child_process').exec;

var ip_route = require('../route/index');

var route_types = require('./utils').types;

/**
 * Change or add a new route.
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
  var cmd = [ip_cmd, 'ip', 'route', 'replace'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.to != 'undefined') {
    args = args.concat('to');

    if (typeof options.type != 'undefined') {
      args = args.concat(options.type);
    }
    else {
      args = args.concat(route_types.unicast);
    }

    args = args.concat(options.to);
  }

  if (typeof options.tos != 'undefined') {
    args = args.concat('tos', options.tos);
  }

  if (typeof options.dsfield != 'undefined') {
    args = args.concat('dsfield', options.dsfield);
  }

  if (typeof options.metric != 'undefined') {
    args = args.concat('metric', options.metric);
  }

  if (typeof options.preference != 'undefined') {
    args = args.concat('preference', options.preference);
  }

  if (typeof options.table != 'undefined') {
    args = args.concat('table', options.table);
  }

  if (typeof options.dev != 'undefined') {
    args = args.concat('dev', options.dev);
  }

  if (typeof options.via != 'undefined') {
    args = args.concat('via', options.via);
  }

  if (typeof options.src != 'undefined') {
    args = args.concat('src', options.src);
  }

  if (typeof options.realm != 'undefined') {
    args = args.concat('realm', options.realm);
  }

  if (typeof options.mtu != 'undefined') {
    args = args.concat('mtu', options.mtu);
  }

  if (typeof options.window != 'undefined') {
    args = args.concat('window', options.window);
  }
  if (typeof options.rtt != 'undefined') {
    args = args.concat('rtt', options.rtt);
  }

  if (typeof options.rttvar != 'undefined') {
    args = args.concat('rttvar', options.rttvar);
  }

  if (typeof options.rto_min != 'undefined') {
    args = args.concat('rto_min', options.rto_min);
  }

  if (typeof options.ssthresh != 'undefined') {
    args = args.concat('ssthresh', options.ssthresh);
  }

  if (typeof options.cwnd != 'undefined') {
    args = args.concat('cwnd', options.cwnd);
  }

  if (typeof options.initcwnd != 'undefined') {
    args = args.concat('initcwnd', options.initcwnd);
  }

  if (typeof options.initrwnd != 'undefined') {
    args = args.concat('initrwnd', options.initrwnd);
  }

  if (typeof options.advmss != 'undefined') {
    args = args.concat('advmss', options.advmss);
  }

  if (typeof options.reordering != 'undefined') {
    args = args.concat('reordering', options.reordering);
  }

  if (typeof options.scope != 'undefined') {
    args = args.concat('scope', options.scope);
  }

  if (typeof options.protocol != 'undefined') {
    args = args.concat('protocol', options.protocol);
  }

  if (typeof options.onlink != 'undefined') {
    args = args.concat('onlink', options.onlink);
  }

  if (typeof options.nexthop != 'undefined') {
    /*
     * An array of nexthops {via, dev, weight}.
     */
    for (var i = 0, j = options.nexthop.length;
         i < j;
         i++) {

      args = args.concat('nexthop');
      var keys = Object.keys(options.nexthop[i]);
      for (var i2 = 0, j2 = keys.length;
           i2 < j2;
           i2++) {

        args = args.concat(keys[i2]);
        args = args.concat(options.nexthop[i][keys[i2]]);
      }
    }
  }

  /*
   * Execute command.
   */
  var cmd_to_exec = cmd.concat(args).join(' ');
  exec(cmd_to_exec, function (error, stdout, stderror) {
    if (error) {
      var err = new Error(stderror.replace(/\n/g, ''));
      err.cmd = cmd.concat(args).join(' ');
      err.code = error.code;

      cb(err);
    }
    else {
      // Flush route cache so the changes become active.
      ip_route.flush({
        table: 'cache'
      }, function (error) {
        if (error) {
          cb(error);
        }
        else {
          cb(null);
        }
      });
    }
  });
};