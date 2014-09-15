var exec = require('child_process').exec;

/**
 * Delete virtual link.
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
  var cmd = [ip_cmd, 'ip', 'link', 'delete'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.dev != 'undefined') {
    args = args.concat(options.dev);
  }

  // Also check if is a valid type.
  if (typeof options.type != 'undefined') {
    args = args.concat('type', options.type);
  }

  /*
   * An array of {key: value} par.
   */
  if (typeof options.type_args != 'undefined') {
    for (var i = 0, j = options.type_args.length; i < j; i++) {
      var key = Object.keys(options.type_args[i])[0];
      value = options.type_args[i][key];

      args = args.concat(key, value);
    }
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