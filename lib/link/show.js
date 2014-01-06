var exec = require('child_process').exec;

/**
 * Display device attributes.
 *
 * @param options
 * @param cb
 */
module.exports = function (options, cb) {
	/*
	 * Build cmd to execute.
	 */
	var cmd = ['ip', 'link', 'show'];
	var args = [];

	/*
	 * Process options.
	 */
	if (options) {
		if (options.hasOwnProperty('dev')) {
			args = args.concat('dev', options.dev);
		}

		if (options.hasOwnProperty('state') && options.state == 'up') {
			args = args.concat('up');
		}
	}

	/*
	 * Execute command.
	 */
	exec(cmd.concat(args).join(' '), function (error, stdout, stderror) {
		if (error) {
			if (cb && typeof cb == 'function') {
				cb(new Error(stderror));
			}
			else {
				throw new Error(stderror);
			}
		}
		else {
			if (cb && typeof cb == 'function') {
				/*
				 * Process the output to give parsed results.
				 */
				var links = [];

				var output = stdout.split('\n');

				for (var line = 0, output_length = output.length - 1;
				     line < output_length;
				     line += 2 /* Each link is composed for two lines. */) {

					var link_line_1 = output[line];
					var link_fields_1 = link_line_1.trim().split(/\s/g);

					var link_line_2 = output[line + 1];
					var link_fields_2 = link_line_2.trim().split(/\s/g);

					var link = {
						index: link_fields_1[0].split(':')[0], // Don't needed since the array is ordered anyway but just in case.
						name : link_fields_1[1].split(':')[0], // TODO: Think about split the master device (@) in another field.
						flags: link_fields_1[2].slice(1, -1).split(','), // First remove the <,>.

						type: link_fields_2[0].split('\/')[1],
						mac : link_fields_2[1],
						brd : link_fields_2[3]
					};

					/*
					 * Parses dynamically the following fields, if are there.
					 *
					 * mtu
					 * qdisc
					 * state
					 * mode
					 * qlen
					 */
					var rest_line_fields = link_fields_1.slice(3);
					for (var i = 0, rest_line_length = rest_line_fields.length - 1;
					     i < rest_line_length;
					     i += 2 /* Each field is composed for two consecutive items. */) {

						link[rest_line_fields[i]] = rest_line_fields[i + 1];
					}

					/*
					 * Finally, add the detected link to the output.
					 */
					links.push(link);
				}

				cb(null, links);
			}
		}
	});
};