var exec = require('child_process').exec;

var parse_routes = require('./utils').parse_routes;

/**
 * List routes.
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
  var cmd = [ip_cmd, 'ip', 'route', 'show'];
  var args = [];

  /*
   * Process options.
   */
  if (typeof options.to != 'undefined') {
    args = args.concat('to', options.to);
  }

  if (typeof options.tos != 'undefined') {
    args = args.concat('tos', options.tos);
  }

  if (typeof options.dsfield != 'undefined') {
    args = args.concat('dsfield', options.dsfield);
  }

  if (typeof options.table != 'undefined') {
    args = args.concat('table', options.table);
  }

  if (typeof options.cached != 'undefined') {
    args = args.concat('cached');
  }

  if (typeof options.cloned != 'undefined') {
    args = args.concat('cloned');
  }

  if (typeof options.from != 'undefined') {
    args = args.concat('from', options.from);
  }

  if (typeof options.protocol != 'undefined') {
    args = args.concat('protocol', options.protocol);
  }

  if (typeof options.scope != 'undefined') {
    args = args.concat('scope', options.scope);
  }

  if (typeof options.type != 'undefined') {
    args = args.concat('type', options.type);
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

  if (typeof options.realms != 'undefined') {
    args = args.concat('realms', options.realms);
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
        var routes = parse_routes(stdout);
      }
      catch (error) {
        cb(error);

        return;
      }

      cb(null, routes);
    }
  });
};