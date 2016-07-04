var fs = require('fs');

var ip_route = require('../route/index');

var tables_path = '/etc/iproute2/rt_tables';

function show(/* options?, cb */) {
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

  fs.readFile(tables_path, {
    encoding: 'utf8'
  }, function (error, file_content) {
    if (error) {
      cb(error);
    }
    else {
      try {
        var tables = parse_tables(file_content);

        /*
         * Filter tables if options where given.
         */
        if (typeof options.id != 'undefined') {
          tables = tables.filter(function (item) {
            return item.id == options.id;
          });
        }

        if (typeof options.name != 'undefined') {
          tables = tables.filter(function (item) {
            return item.name == options.name;
          });
        }
      }
      catch (error) {
        cb(error);

        return;
      }

      cb(null, tables);
    }
  });
}

function parse_tables(raw_data) {
  if (typeof raw_data == 'undefined') {
    throw new Error('Parsing Error: Invalid arguments: ' + raw_data);
  }
  else {
    /*
     * Process the output to give parsed results.
     */
    var tables = [];

    var output = [];
    if (raw_data.length) {
      output = raw_data.split('\n');
    }

    for (var line = 0, output_length = output.length - 1;
         line < output_length;
         line++) {

      var table_line = output[line];

      // Pass on comments.
      if (table_line.charAt(0) == '#') {
        continue;
      }

      var table_fields = table_line.trim().split(/\s/g);

      var table = {
        id  : table_fields[0],
        name: table_fields[1]
      };

      /*
       * Finally, add the parsed data to the output.
       */
      tables.push(table);
    }

    return tables;
  }
}

function add(/* options, cb */) {
  var options;
  var new_tables;
  var cb;

  if (typeof arguments[0] == 'object'
    && arguments[0] instanceof Object
    && !(arguments[0] instanceof Array)
    && typeof arguments[1] == 'function') {

    options = arguments[0];
    cb = arguments[1];

    /*
     * Validate options.
     */
    if (typeof options.id == 'undefined'
      || typeof options.name == 'undefined') {

      throw new Error('Invalid options. Expected: id, name');
    }
  }
  else if (typeof arguments[0] == 'object'
    && arguments[0] instanceof Array
    && typeof arguments[1] == 'function') {

    new_tables = arguments[0];
    cb = arguments[1];

    /*
     * Validate options.
     */
    if (!new_tables.every(function (item) {
      return (typeof item.id == 'number'
        && typeof item.name == 'string');
    })) {

      throw new Error('Invalid options. For each array item is expected: id:number, name:string');
    }
  }
  else {
    throw new Error('Invalid arguments. Signature: [options,tables] callback');
  }

  show(function (error, tables) {
    if (error) {
      cb(error);
    }
    else {
      var data_to_append;

      if (options != null) {
        tables = tables.filter(function (item) {
          return (item.id == options.id
            || item.name == options.name);
        });

        if (tables.length) {
          // The table is already there so noop and exit silently.
          cb(null);
        }
        else {
          /*
           * Build the data to be written.
           */
          data_to_append = options.id + '\t' + options.name + '\n';

          fs.appendFile(tables_path, data_to_append, function (error) {
            if (error) {
              cb(error);
            }
            else {
              // Flush route cache so the changes become active.
              ip_route.flush({
                table: 'cache'
              }, function (error) {
                if (error) {
                  cb(error);
                }
                else {
                  cb(null);
                }
              });
            }
          });
        }
      }

      if (new_tables != null) {
        data_to_append = '';
        for (var i = 0, length = new_tables.length;
             i < length;
             i++) {

          var present_tables = tables.filter(function (item) {
            return (item.id == new_tables[i].id
              || item.name == new_tables[i].name);
          });

          // If there is no such table in OS, add it.
          if (!present_tables.length) {
            /*
             * Build the data to be written.
             */
            data_to_append += new_tables[i].id + '\t' + new_tables[i].name + '\n';
          }
        }

        if (data_to_append != '') {
          fs.appendFile(tables_path, data_to_append, function (error) {
            if (error) {
              cb(error);
            }
            else {
              // Flush route cache so the changes become active.
              ip_route.flush({
                table: 'cache'
              }, function (error) {
                if (error) {
                  cb(error);
                }
                else {
                  cb(null);
                }
              });
            }
          });
        }
        else {
          cb(null);
        }
      }

      // Note. It never have to get here since that will means that options didn't get validated correctly.
    }
  });
}

function delete_table(options, cb) {
  if (typeof arguments[0] != 'object'
    || typeof arguments[1] != 'function') {

    throw new Error('Invalid arguments. Signature: (options, callback)');
  }
  else {
    /*
     * Validate options.
     */
    if (typeof options.id == 'undefined'
      || typeof options.name == 'undefined') {

      throw new Error('Invalid options. Expected: id, name');
    }
  }

  show(function (error, old_tables) {
    if (error) {
      cb(error);
    }
    else {
      var new_tables = old_tables.filter(function (item) {
        return (item.id != options.id);
      });

      if (!new_tables.length) {
        // The table is not there so noop and exit silently.
        cb(null);
      }
      else {
        /*
         * Build the data to be written.
         */
        var data_to_write = '';

        for (var i = 0, length = new_tables.length;
             i < length;
             i++) {

          data_to_write += new_tables[i].id + '\t' + new_tables[i].name + '\n';
        }

        fs.writeFile(tables_path, data_to_write, function (error) {
          if (error) {
            cb(error);
          }
          else {
            // Flush route cache so the changes become active.
            ip_route.flush({
              table: 'cache'
            }, function (error) {
              if (error) {
                cb(error);
              }
              else {
                cb(null);
              }
            });
          }
        });
      }
    }
  });
}

function flush(cb) {
  if (typeof arguments[0] != 'function') {
    throw new Error('Invalid arguments. Signature: (callback)');
  }

  fs.writeFile(tables_path, '', function (error) {
    if (error) {
      cb(error);
    }
    else {
      // Remember afterwards to flush the route cache so the changes become active!
      cb(null);
    }
  });
}

module.exports = {
  tables_path: tables_path,
  show       : show,
  add        : add,
  delete     : delete_table,
  flush      : flush
};