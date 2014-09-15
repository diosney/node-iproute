var exec = require('child_process').exec;

var parse_addresses = require('./utils').parse_addresses;

/**
 * Display protocol addresses.
 *
 * @param options
 * @param cb
 */
module.exports = function (/* options?, cb */) {
  var options;
  var cb;

  if (typeof arguments[0] == 'function') {
    options = {};
    cb = arguments[0];
  }
  else if (typeof arguments[0] == 'object'
    && typeof arguments[1] == 'function') {

    options = arguments[0];
    cb = arguments[1];
  }
  else {
    throw new Error('Invalid arguments. Signature: [options,] callback');
  }

  var ip_cmd = (options.sudo)
    ? 'sudo'
    : '';

  /*
   * Build cmd to execute.
   */
  var cmd = [ip_cmd, 'ip', 'address', 'show'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.dev != 'undefined') {
    args = args.concat('dev', options.dev);
  }

  if (typeof options.scope != 'undefined') {
    args = args.concat('scope', options.scope);
  }

  if (typeof options.to != 'undefined') {
    args = args.concat('to', options.to);
  }

  if (typeof options.label != 'undefined') {
    args = args.concat('label', options.label);
  }

  if (typeof options.dynamic != 'undefined') {
    args = args.concat('dynamic');
  }

  if (typeof options.permanent != 'undefined') {
    args = args.concat('permanent');
  }

  if (typeof options.tentative != 'undefined') {
    args = args.concat('tentative');
  }

  if (typeof options.deprecated != 'undefined') {
    args = args.concat('deprecated');
  }

  if (typeof options.primary != 'undefined') {
    args = args.concat('primary');
  }

  if (typeof options.secondary != 'undefined') {
    args = args.concat('secondary');
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
      /*
       * Process the output to give parsed results.
       */
      try {
        var addresses = parse_addresses(stdout);
      }
      catch (error) {
        cb(error);

        return;
      }

      cb(null, addresses);
    }
  });
};