var events = require('events');
var spawn = require('child_process').spawn;

var monitor = new events.EventEmitter();

/*
 * Load supported parse functions.
 */
var parse_links = require('../link/utils').parse_links;

// Supported parsing of monitored objects.
exports.objects = {
  LINK: 'LINK'
};

/**
 * Start the monitor on the specified objects or all of them.
 *
 */
module.exports = function (options) {
  /*
   * Process options.
   */
  var mon;
  if (options && options.sudo) {
    mon = spawn('sudo', ['ip', 'monitor', 'all']);
  }
  else {
    mon = spawn('ip', ['monitor', 'all']);
  }

  mon.stdout.setEncoding('utf8');
  mon.stdout.on('data', function (data) {
    var output = data.split('\n');

    for (var line = 0, output_length = output.length - 1;
         line < output_length;
         line++) {

      // Check if is an object head line by cheking for [XXX] tag.
      if (output[line].search(/\[\w+\]/) != -1) {
        var object_data_lines = [];

        var pattern = /\[\w+\]/; // Search for [XXX] pattern.

        var object_id = pattern.exec(output[line])[0].split('[')[1].split(']')[0];

        // Push this very first line.
        object_data_lines.push(output[line].split(pattern)[1]);

        // Check for more data spanned below.
        for (var line2 = line + 1;
             line2 < output_length;
             line2++) {

          // Check if is an object head line by cheking for [XXX] tag.
          if (output[line2].search(pattern) != -1) {
            break; // End the for since we already matched a different object.
          }
          else {
            // This line is related to current object so push it.
            object_data_lines.push(output[line2]);
          }
        }

        var data_to_emit = {};

        if (object_id == exports.objects.LINK) {
          try {
            data_to_emit = {
              object: 'link',
              data  : parse_links(object_data_lines.join('\n'))
            };

            monitor.emit('link', data_to_emit);
            monitor.emit('all', data_to_emit);
          }
          catch (error) {
            monitor.emit('error', new Error('Error parsing link output.'));

            return;
          }
        }
      }
    }
  });

  mon.stderr.setEncoding('utf8');
  mon.stderr.on('data', function (data) {
    monitor.emit('error', data);
  });

  /*
   * And the last step and the most important, return the real event emitter.
   */
  return monitor;
};