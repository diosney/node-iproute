// Display device attributes.
exports.show = require('./show');

// Delete virtual link.
exports.delete = require('./delete');

// Change device attributes.
exports.set = require('./set');

// Add virtual link.
exports.add = require('./add');

// Virtual link types.
exports.vl_types = [
	'bridge',
	'can',
	'dummy',
	'ifb',
	'ipoib',
	'macvlan',
	'vcan',
	'veth',
	'vlan',
	'vxlan'
];

// Interface flags.
exports.flags = [
	'UP',
	'LOOPBACK',
	'BROADCAST',
	'POINTOPOINT',
	'MULTICAST',
	'PROMISC',
	'ALLMULTI',
	'NOARP',
	'DYNAMIC',
	'SLAVE',

	// Undocumented.
	'LOWER_UP',
	'NO-CARRIER',
	'M-DOWN'
];

// Interface statuses.
exports.statuses = [
	'UP',
	'DOWN',
	'UNKNOWN'
];