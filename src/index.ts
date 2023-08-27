// Network devices configuration.
import * as linkModule from './commands/link';
import linkDefaults    from './commands/link';

// Protocol address management.
import * as addressModule from './commands/address';
import addressDefaults    from './commands/address';

// Routing table management.
import * as routeModule from './commands/route';
import routeDefaults    from './commands/route';

// Routing policy database (RPDB) management.
import * as ruleModule from './commands/rule';
import ruleDefaults    from './commands/rule';

// State monitoring.
import * as monitorModule from './commands/monitor';
import monitorDefaults    from './commands/monitor';

// General utilities functions to provide extra handy functionality not present in iproute.
import * as utilsModule from './utils';
import utilsDefaults    from './utils';

export { linkModule as link };
export { addressModule as address };
export { routeModule as route };
export { ruleModule as rule };
export { monitorModule as monitor };
export { utilsModule as utils };

export default {
  link:    linkDefaults,
  address: addressDefaults,
  rule:    ruleDefaults,
  route:   routeDefaults,
  monitor: monitorDefaults,
  // Extras.
  utils: utilsDefaults
};