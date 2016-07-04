var exec = require('child_process').exec;

/**
 * Delete a protocol address.
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
  var cmd = [ip_cmd, 'ip', 'address', 'delete'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.address != 'undefined') {
    args = args.concat(options.address);
  }

  if (typeof options.dev != 'undefined') {
    args = args.concat('dev', options.dev);
  }

  if (typeof options.local != 'undefined') {
    args = args.concat('local', options.local);
  }

  if (typeof options.peer != 'undefined') {
    args = args.concat('peer', options.peer);
  }

  if (typeof options.broadcast != 'undefined') {
    args = args.concat('broadcast', options.broadcast);
  }

  if (typeof options.label != 'undefined') {
    args = args.concat('label', options.label);
  }

  if (typeof options.scope != 'undefined') {
    args = args.concat('scope', options.scope);
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