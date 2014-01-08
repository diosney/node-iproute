// Addresses scope types.
exports.scopes = [
	'host',
	'link',
	'global',
	'nowhere',
	'site'
];

// Addresses flags.
exports.flags = [
	'permanent',
	'dynamic',
	'primary',
	'secondary',
	'tentative',
	'deprecated',
	'dadfailed',
	'temporary',
	'home',
	'nodad'
];

/**
 * Parses .show() output.
 *
 * @param raw_data
 * @returns {Object}
 */
exports.parse_addresses = function (raw_data) {
	if (!raw_data) {
		throw new Error('Invalid arguments.');
	}
	else {
		/*
		 * Process the output to give parsed results.
		 */
		var addresses = {};

		var output = raw_data.split('\n');

		var current_link_name;
		for (var line = 0, output_length = output.length - 1;
		     line < output_length;
		     line++) {

			var current_line = output[line];
			var current_line_fields = current_line.trim().split(/\s/g);

			var possible_link_index = parseInt(current_line_fields[0].split(':')[0]);

			if (possible_link_index) {
				/*
				 * Is indeed a new link.
				 */
				// Update link pointer.
				current_link_name = current_line_fields[1].split(':')[0];

				// Prepare new link addresses container.
				addresses[current_link_name] = [];
			}
			else {
				// Still parsing addresses in the last link.
				var possible_type = current_line_fields[0];

				var address;
				if (possible_type == 'inet'
					|| possible_type == 'inet6') {

					// Is an IP address.
					address = {
						type   : possible_type,
						address: current_line_fields[1],
						scope  : current_line_fields[3]
					};

					addresses[current_link_name].push(address);
				}
				else if (possible_type.split('\/').length == 2) {
					// Is a frame address.
					address = {
						type: current_line_fields[0].split('\/')[1],
						mac : current_line_fields[1],
						brd : current_line_fields[3]
					};

					addresses[current_link_name].push(address);
				}
			}

		}

		return addresses;
	}
};