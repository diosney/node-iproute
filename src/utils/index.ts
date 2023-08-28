import * as ipForwardingModule from './ip-forwarding';
import ipForwardingDefaults    from './ip-forwarding';

import * as routingTablesModule from './routing-tables';
import routingTablesDefaults    from './routing-tables';

export { ipForwardingModule as ipForwarding };
export { routingTablesModule as routingTables };

export default {
  ipForwarding:  ipForwardingDefaults,
  routingTables: routingTablesDefaults
};
