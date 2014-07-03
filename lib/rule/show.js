var exec = require('child_process').exec;

var parse_rules = require('./utils').parse_rules;

/**
 * List rules.
 *
 * @param cb
 */
module.exports = function (cb) {
  if (typeof arguments[0] == 'function') {
    cb = arguments[0];
  }
  else {
    throw new Error('Invalid arguments. Signature: callback');
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
      cb(stderror.replace(/\n/g, '') + '. Executed command line: ' + cmd.join(' '));
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