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
  if(options.sudo){
    cmd = ['sudo sysctl'];
  }
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
    /*
    * For some reason, command always contains stderror, but with length 0. A condition do avoid false positive.
    */
    if (error || (typeof(stderror) != 'null' && stderror.length > 0)) {
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
  enable : function (options, cb) {
    /*
     * For compatibility reasons. If options is a function, the developer did developed his code with an older version.
     * copy options to cb and change options to null.
     */
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    sysctl({
      action: 'enable',
      path  : v4_path,
      sudo: options.sudo || false
    }, cb);
  },
  disable: function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    sysctl({
      action: 'disable',
      path  : v4_path,
      sudo: options.sudo || false
    }, cb);
  },
  status : function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    sysctl({
      action: 'status',
      path  : v4_path,
      sudo: options.sudo || false
    }, cb);
  }
};

var v6_path = 'net.ipv6.conf.all.forwarding';
var v6 = {
  path   : v6_path,
  enable : function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    sysctl({
      action: 'enable',
      path  : v6_path,
      sudo: options.sudo || false
    }, cb);
  },
  disable: function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    sysctl({
      action: 'disable',
      path  : v6_path,
      sudo: options.sudo || false
    }, cb);
  },
  status : function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    sysctl({
      action: 'status',
      path  : v6_path,
      sudo: options.sudo || false
    }, cb);
  }
};

module.exports = {
  v4     : v4,
  v6     : v6,
  enable : function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    async.parallel([
      function (callback_parallel) {
        v4.enable(options, function (error) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null);
          }
        });
      },
      function (callback_parallel) {
        v6.enable(options, function (error) {
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
  disable: function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    async.parallel([
      function (callback_parallel) {
        v4.disable(options, function (error) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null);
          }
        });
      },
      function (callback_parallel) {
        v6.disable(options, function (error) {
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
  status : function (options, cb) {
    if(typeof(options) == 'function' && !cb){
        cb = options;
        options = {};
    }
    async.parallel([
      function (callback_parallel) {
        v4.status(options, function (error, status) {
          if (error) {
            callback_parallel(error);
          }
          else {
            callback_parallel(null, status);
          }
        });
      },
      function (callback_parallel) {
        v6.status(options, function (error, status) {
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