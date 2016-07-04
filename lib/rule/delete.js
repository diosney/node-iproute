var exec = require('child_process').exec;

var ip_route = require('../route/index');
var rule_types = require('./utils').types;

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

  var ip_cmd = (options.sudo)
    ? 'sudo'
    : '';

  /*
   * Build cmd to execute.
   */
  var cmd = [ip_cmd, 'ip', 'rule', 'delete'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.type != 'undefined') {
    args = args.concat('type', options.type);
  }
  else {
    args = args.concat('type', rule_types.unicast);
  }

  if (typeof options.from != 'undefined') {
    args = args.concat('from', options.from);
  }

  if (typeof options.to != 'undefined') {
    args = args.concat('to', options.to);
  }

  if (typeof options.iif != 'undefined') {
    args = args.concat('iif', options.iif);
  }

  if (typeof options.oif != 'undefined') {
    args = args.concat('oif', options.oif);
  }

  if (typeof options.tos != 'undefined') {
    args = args.concat('tos', options.tos);
  }

  if (typeof options.dsfield != 'undefined') {
    args = args.concat('dsfield', options.dsfield);
  }

  if (typeof options.fwmark != 'undefined') {
    args = args.concat('fwmark', options.fwmark);
  }

  if (typeof options.priority != 'undefined') {
    args = args.concat('priority', options.priority);
  }

  if (typeof options.table != 'undefined') {
    args = args.concat('table', options.table);
  }

  if (typeof options.realms != 'undefined') {
    args = args.concat('realms', options.realms);
  }

  if (typeof options.nat != 'undefined') {
    args = args.concat('nat', options.nat);
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