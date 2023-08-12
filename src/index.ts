// Network devices configuration.
import link from './commands/link';

// Protocol address management.
import address from './commands/address';

// Routing table management.
import route from './commands/route';

// Routing policy database (RPDB) management.
import rule from './commands/rule';

// State monitoring.
import monitor from './commands/monitor';

// General utilities functions to provide extra handy functionality not present in iproute.
import utils from './utils';

export default {
  link,
  address,
  rule,
  route,
  monitor,
  // Extras.
  utils
};