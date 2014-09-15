var exec = require('child_process').exec;

var parse_links = require('./utils').parse_links;

/**
 * Display device attributes.
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
  var cmd = [ip_cmd, 'ip', 'link', 'show'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.dev != 'undefined') {
    args = args.concat('dev', options.dev);
  }
  else if (typeof options.group != 'undefined') {
    args = args.concat('group', options.group);
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
        var links = parse_links(stdout);
      }
      catch (error) {
        cb(error);

        return;
      }

      cb(null, links);
    }
  });
};