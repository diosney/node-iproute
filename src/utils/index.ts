import * as ipForwardingModule from './ip-forwarding';
import ipForwardingDefaults    from './ip-forwarding';

import * as routingTablesModule from './routing-tables';
import routingTablesDefaults    from './routing-tables';

/** Manipulates IP forwarding. */
export { ipForwardingModule as ipForwarding };
/** Manipulates routing tables. */
export { routingTablesModule as routingTables };

export default {
  ipForwarding:  ipForwardingDefaults,
  routingTables: routingTablesDefaults
};
