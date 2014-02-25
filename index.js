// Network devices configuration.
exports.link = require('./lib/link/index');

// Protocol address management.
exports.address = require('./lib/address/index');

// Routing table management.
exports.route = require('./lib/route/index');

// Routing policy database (RPDB) management.
exports.rule = require('./lib/rule/index');

// State monitoring.
exports.monitor = require('./lib/monitor/index');

// General utilities functions to provide extra handy functionality not present in iproute.
exports.utils = require('./lib/utils/index');