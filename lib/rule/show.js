var exec = require('child_process').exec;

var parse_rules = require('./utils').parse_rules;

/**
 * List rules.
 *
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
  var cmd = [ip_cmd, 'ip', 'rule', 'show'];

  /*
   * Execute command.
   */
  exec(cmd.join(' '), function (error, stdout, stderror) {
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
        var rules = parse_rules(stdout);
      }
      catch (error) {
        cb(error);

        return;
      }

      cb(null, rules);
    }
  });
};