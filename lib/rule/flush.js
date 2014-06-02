var exec = require('child_process').exec;

/**
 * Flush rules.
 *
 * @param cb
 */
module.exports = function (cb) {
  if (typeof arguments[0] != 'function') {

    throw new Error('Invalid arguments. Signature: callback');
  }

  /*
   * Build cmd to execute.
   */
  var cmd = ['ip', 'rule', 'flush'];

  /*
   * Execute command.
   */
  exec(cmd.join(' '), function (error, stdout, stderror) {
    if (error) {
      cb(stderror.replace(/\n/g, '') + '. Executed command line: ' + cmd.join(' '));
    }
    else {
      cb(null);
    }
  });
};