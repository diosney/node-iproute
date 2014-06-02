var async = require('async');
var exec = require('child_process').exec;

/*
 * options.action
 * options.path
 */
function sysctl(options, cb) {
  if (typeof arguments[0] != 'object'
    && typeof arguments[1] != 'function') {

    throw new Error('Invalid arguments. Signature: (object, callback)');
  }

  /*
   * Build cmd to execute.
   */
  var cmd = ['sysctl'];
  var args = [];

  switch (options.action) {
    case 'enable':
      args = args.concat('-w', options.path + '=1'); // It can not be --write since is not supported in older kernels.

      break;
    case 'disable':
      args = args.concat('-w', options.path + '=0'); // It can not be --write since is not supported in older kernels.

      break;
    case 'status':
      args = args.concat('--values', options.path);

      break;
    default:
      break;
  }

  /*
   * Execute command.
   */
  exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
    if (error) {
      cb(stderror.replace(/\n/g, '') + '. Executed command line: ' + cmd.concat(args).join(' '));
    }
    else {
      var result = null;
      if (options.action == 'status') {
        result = stdout;
      }

      cb(null, result);
    }
  });
}

var v4_path = 'net.ipv4.ip_forward';
var v4 = {
  path   : v4_path,
  enable : function (cb) {
    sysctl({
      action: 'enable',
      path  : v4_path
    }, cb);
  },
  disable: function (cb) {
    sysctl({
      action: 'disable',
      path  : v4_path
    }, cb);
  },
  status : function (cb) {
    sysctl({
      action: 'status',
      path  : v4_path
    }, cb);
  }
};

var v6_path = 'net.ipv6.conf.all.forwarding';
var v6 = {
  path   : v6_path,
  enable : function (cb) {
    sysctl({
      action: 'enable',
      path  : v6_path
    }, cb);
  },
  disable: function (cb) {
    sysctl({
      action: 'disable',
      path  : v6_path
    }, cb);
  },
  status : function (cb) {
    sysctl({
      action: 'status',
      path  : v6_path
    }, cb);
  }
};

module.exports = {
  v4     : v4,
  v6     : v6,
  enable : function (cb) {
    async.parallel([
      function (callback_parallel) {
        v4.enable(function (error) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null);
          }
        });
      },
      function (callback_parallel) {
        v6.enable(function (error) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null);
          }
        });
      }
    ],
      function (error) {
        if (error) {
          cb(error);
        }
        else {
          cb(null);
        }
      });
  },
  disable: function (cb) {
    async.parallel([
      function (callback_parallel) {
        v4.disable(function (error) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null);
          }
        });
      },
      function (callback_parallel) {
        v6.disable(function (error) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null);
          }
        });
      }
    ],
      function (error) {
        if (error) {
          cb(error);
        }
        else {
          cb(null);
        }
      });
  },
  status : function (cb) {
    async.parallel([
      function (callback_parallel) {
        v4.status(function (error, status) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null, status);
          }
        });
      },
      function (callback_parallel) {
        v6.status(function (error, status) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null, status);
          }
        });
      }
    ],
      function (error, results) {
        if (error) {
          cb(error);
        }
        else {
          var status = {
            v4: results[0].split('\n')[0],
            v6: results[1].split('\n')[0]
          };

          cb(null, status);
        }
      });
  }
};