// Network devices configuration.
import link from './commands/link';

// Protocol address management.
import address from './commands/address';

// // Routing table management.
// exports.route = require('./src/route/index');
//
// // Routing policy database (RPDB) management.
// exports.rule = require('./src/rule/index');
//
// // State monitoring.
// exports.monitor = require('./src/monitor/index');
//
// // General utilities functions to provide extra handy functionality not present in iproute.
// exports.utils = require('./src/utils/index');

export default {
  link,
  address
};