## Examples

Several usage examples to give you an idea of what you can do with the library.

### `ip link` Network devices configuration / [Man Page](https://man7.org/linux/man-pages/man8/ip-link.8.html)

	import { link } from 'iproute';

#### `link.show(options?, globalOptions?)`

*Show link information about the `eth0` device*

	const links = await link.show({
	  dev: 'eth0'
	});

*Shortcut to show all links*

	const links = await link.show();
	const links = await link.show({});

The `links` output is an array of links with the matching [LinkInfo[]](https://diosney.github.io/node-iproute/interfaces/LinkInfo.html) interface.

#### `link.del(options, globalOptions?)`

**Example:**

	await link.del({
	  dev_: 'eth0.1@eth0'
	});

#### `link.add(options, globalOptions?)`

**Example:**

	await link.add({
	  link:    'lo',
      name:    'dummy100',
      address: '00:11:22:33:44:55',
      mtu:     1500,
      type:    VirtualLinkTypes.Dummy
	});

### `ip address` Protocol address management / [Man Page](https://man7.org/linux/man-pages/man8/ip-address.8.html)

	import { address } from 'iproute';

#### `address.show(options?, globalOptions?)`

*Show only the `eth0` device addresses*

	const addresses = await address.show({
	  dev: 'eth0'
	});

    const addresses = await address.show();
    const addresses = await address.show({});

The `addresses` output is an array of links with the matching [LinkWithAddressInfo[]](https://diosney.github.io/node-iproute/interfaces/LinkWithAddressInfo.html) interface.

#### `address.flush(options, globalOptions?)`

	await address.flush({
	  dev: 'eth0'
	});

#### `address.add(options, globalOptions?)`

	await address.add({
	  local:  '10.3.15.3/24',
	  scope:  AddressScopes.Host,    // 'host'
	  dev:	 'eth0'
	});

#### `address.del(options, globalOptions?)`

	await address.del({
	  local: '10.3.15.3/24'
	  dev:	 'eth0'
	});

### `ip route` Routing table management / [Man Page](https://man7.org/linux/man-pages/man8/ip-route.8.html)

	import { route } from 'iproute';

#### `route.show(options?, globalOptions?)`

**Example:**

	const routes = await route.show({
	  table: RouteRoutingTables.All    // 'all'
	});

The `routes` output is an array of routes with the matching [RouteInfo[]](https://diosney.github.io/node-iproute/interfaces/RouteInfo.html) interface.

#### route.flush(options, globalOptions?)

	await route.flush({
	  table: RouteRoutingTables.Cache   // 'cache'
	});

#### `route.add(options, globalOptions?)`
#### `route.replace(options, globalOptions?)`

*Unicast type route (the default if not specified)*

	await route.add({
	  to_:	'10.0.0.0/24',
	  via:	{
        address_: '192.168.56.1'
      }
	});

*Multipath route with load balance between devices*

	await route.add({
	  to_:	      'default',
	  scope:	  AddressScopes.Global,     // 'global'
	  nexthops_:  [{
          nexthop: true,
	      dev: 'ppp0'
	    },
	    {
          nexthop: true,
	      dev: 'ppp1'
	    }]
	});

*A NAT route*

	await route.add({
	  type_:	RoutingTableTypes.Nat,    // 'nat'
	  to_:	    '10.0.0.0/24',
	  table:	300,
      via:	{
        address_: '192.168.56.1'
      }
	});

#### `route.del(options, globalOptions?)`

*Delete multipath route with load balance between devices*

	await route.del({
	  to_:	      'default',
	  scope:	  AddressScopes.Global,     // 'global'
	  nexthops_:  [{
          nexthop: true,
	      dev: 'ppp0'
	    },
	    {
          nexthop: true,
	      dev: 'ppp1'
	   }]
	});

### `ip rule` Routing policy database (RPDB) management / [Man Page](https://man7.org/linux/man-pages/man8/ip-rule.8.html)

	import { rule } from 'iproute';

#### `rule.add(options, globalOptions?)`

*Unicast type rule (the default if not specified)*

	await rule.add({
	  from:	      '192.203.80.0/24',
	  table:	  300,
	  preference: 220
	});

*NAT type rule*

	await rule.add({
	  from:	        '193.233.7.83',
	  table:	    1,
	  preference:   320,
	  nat:		    '192.203.80.144'
	});

#### `rule.del(options, globalOptions?)`

*Delete the unused default rule*

	await rule.del({
	  preference: 32767
	});

#### `rule.flush(globalOptions?)`

**Example:**

	await rule.flush();

#### `rule.show(options?, globalOptions?)`

**Example:**

	const rules = await rule.show();

The `rules` output is an array of routes with the matching [RuleInfo[]](https://diosney.github.io/node-iproute/interfaces/RuleInfo.html) interface.

### `ip monitor` State monitoring / [Man Page](https://man7.org/linux/man-pages/man8/ip-monitor.8.html)

	import { monitor } from 'iproute';

#### `monitor(options, globalOptions?)`

*Monitor all objects state changes*

	monitor({
      object_: MonitorObjects.All     // 'all'
    });

*After starting the monitor, you can start watching for changes:*

    let command: MonitorCommand<MonitorOptions>;

    monitor({
      object_: MonitorObjects.All
    })
    .then((_command) => {
      command = _command;
    
      command.on(MonitorObjects.All, (data: MonitorEmittedData) => {
        // Do something.      
      });
    
      command.on('error', (error) => {
        // Do something.
      });
    });

    setTimeout(() => {
       command.close();
    }, 5000)

The `data` object will hold the `iproute` output data, which at this moment doesn't support the `-json` option, so right
now will conform to the interface [MonitorEmittedData](https://diosney.github.io/node-iproute/interfaces/MonitorEmittedData.html).

### `ip addrlabel` Protocol address label management / [Man Page](https://man7.org/linux/man-pages/man8/ip-addrlabel.8.html)

	import { addrlabel } from 'iproute';

#### `addrlabel.add(options, globalOptions?)`

*Add an address label*

	await addrlabel.add({
	  prefix: '2001:db8::/32',
	  label:   100,
	});

#### `addrlabel.del(options, globalOptions?)`

*Delete an address label*

	await addrlabel.del({
	  prefix: '2001:db8::/32'
	});

#### `addrlabel.flush(globalOptions?)`

**Example:**

	await addrlabel.flush();

#### `addrlabel.list(globalOptions?)`

**Example:**

	const labels = await addrlabel.list();

The `labels` output is an array of address labels with the matching [AddrlabelInfo[]](https://diosney.github.io/node-iproute/interfaces/AddrlabelInfo.html) interface.

### `ip neighbour` Neighbour/ARP tables management / [Man Page](https://man7.org/linux/man-pages/man8/ip-neighbour.8.html)

	import { neighbour } from 'iproute';

#### `neighbour.add(options, globalOptions?)`

*Add a simple ARP entry*

	await neighbour.add({
	  to    : '192.168.1.100',
      lladdr: '00:aa:bb:cc:dd:ee',
      dev   : 'eth0'
	});

#### `neighbour.del(options, globalOptions?)`

*Delete an ARP entry*

	await neighbour.del({
	  to : '192.168.1.100',
      dev: 'eth0'
	});

#### `neighbour.flush(options, globalOptions?)`

**Example:**

	await neighbour.flush({
      dev: 'eth0'
	});

#### `neighbour.show(options, globalOptions?)`

**Example:**

	const entries = await neighbour.show({});

The `entries` output is an array of ARP entries with the matching [NeighbourInfo[]](https://diosney.github.io/node-iproute/interfaces/NeighbourInfo.html) interface.

### `ip ntable` Neighbour table configuration / [Man Page](https://man7.org/linux/man-pages/man8/ip-ntable.8.html)

	import { ntable } from 'iproute';

#### `ntable.show(options, globalOptions?)`

**Example:**

	const entries = await ntable.show({});

The `entries` output is an array of entries with the matching [NtableInfo[]](https://diosney.github.io/node-iproute/interfaces/NtableInfo.html) interface.

### `ip tunnel` Tunnel configuration / [Man Page](https://man7.org/linux/man-pages/man8/ip-tunnel.8.html)

	import { tunnel } from 'iproute';

#### `tunnel.add(options, globalOptions?)`

*Create a new tunnel*

	await tunnel.add({
        name  : 'tun0',
        mode  : TunnelModes.Gre,
        remote: '203.0.113.4',
        local : '203.0.113.5',
        dev   : 'eth0'
	});

#### `tunnel.del(options, globalOptions?)`

*Delete a tunnel*

	await tunnel.del({
	  name: 'tun0'  
	});

#### `tunnel.change(options, globalOptions?)`

**Modify an existing tunnel**

	await tunnel.change({
        name  : 'tun0',
        mode  : TunnelModes.Ipip,
        remote: '203.0.113.6',
        local : '203.0.113.7',
        dev   : 'eth1'
	});

#### `tunnel.show(options, globalOptions?)`

**Example:**

	const entries = await tunnel.show({});

The `entries` output is an array of tunnel configurations with the matching [TunnelInfo[]](https://diosney.github.io/node-iproute/interfaces/TunnelInfo.html) interface.

#### `tunnel.6rd(options, globalOptions?)`

**Example:**

    await tunnel.6rd({
        dev        : 'eth0',
        6rd_prefix : '2001:db8::'
    });

### `ip tuntap` Tuntap tunnel configuration

	import { tuntap } from 'iproute';

#### `tuntap.add(options, globalOptions?)`

*Create a new tuntap device*

	await tuntap.add({
        mode: TunTapTunnelModes.Tun
	});

#### `tuntap.del(options, globalOptions?)`

*Delete a tunnel*

	await tuntap.del({
      mode: TunTapTunnelModes.Tun
	});

#### `tuntap.show(options, globalOptions?)`

**Example:**

	const entries = await tuntap.show({});

The `entries` output is an array of tunnel configurations with the matching [TunTapTunnelInfo[]](https://diosney.github.io/node-iproute/interfaces/TunTapTunnelInfo.html) interface.

### `ip maddress` Multicast addresses management / [Man Page](https://man7.org/linux/man-pages/man8/ip-maddress.8.html)

	import { maddress } from 'iproute';

#### `maddress.add(options, globalOptions?)`

*Add a multicast address*

	await maddress.add({
        address_: '33:33:00:00:00:01',
        dev: 'enp0s3'
	});

#### `maddress.del(options, globalOptions?)`

*Delete a tunnel*

	await maddress.del({
        address_: '33:33:00:00:00:01',
        dev: 'enp0s3'
	});

#### `maddress.show(options, globalOptions?)`

**Example:**

	const entries = await maddress.show({});

The `entries` output is an array of tunnel configurations with the matching [MaddressInfo[]](https://diosney.github.io/node-iproute/interfaces/MaddressInfo.html) interface.

### `ip mroute` Multicast routing cache management / [Man Page](https://man7.org/linux/man-pages/man8/ip-mroute.8.html)

	import { mroute } from 'iproute';

#### `mroute.show(options, globalOptions?)`

**Example:**

	const entries = await mroute.show({});

The `entries` output is an array of multicast routing entries configurations with the matching [MrouteInfo[]](https://diosney.github.io/node-iproute/interfaces/MrouteInfo.html) interface.

### utils

General helpful utils to provide extra handy functionality not present in `iproute`, like routing table manipulation
and IP forwarding configuration.

See its complete [API documentation](https://diosney.github.io/node-iproute/modules/utils.html).

	import { utils } from 'iproute';

#### `utils.ipForwarding`

Allows you to enable/disable IP forwarding, and query for its status.

Specific IPv4 or IPv6 methods:

    await utils.ipForwarding.v{4|6}.enable()
    await utils.ipForwarding.v{4|6}.disable()

    const status = await utils.ipForwarding.v{4|6}.status()

General methods affecting both IPv4 and IPv6:

    await utils.ipForwarding.enable()
    await utils.ipForwarding.disable()

    const status = await utils.ipForwarding.status()

#### `utils.routingTables`

Provides routing tables manipulation functions, like table creation, deletion and querying.

Those are wrapper functions to manage the `/etc/iproute/rt_tables` file.

> **Note:** You have to flush the routing cache after making modifications in the routing tables:
>
>     import { route } from 'iproute';
>
>     await route.flush({
>       table: RouteRoutingTables.Cache   // 'cache'
>     });

##### `utils.routingTables.show(options?, globalOptions?)`

*Show all tables*

	const tables = await utils.routingTables.show();

*Show table with `id` 255*

    const tables = await utils.routingTables.show({
      id: 255
    });

*Show table with `name` `local`*

    const tables = await show({
      name: RoutingTables.Local   // 'local'
    });

*The `tables` output is an array of tables with the expected following structure*

	[
	  { id: '254', name: 'main' },
      { id: '0', name: 'unspec' },
      { id: '253', name: 'default' },
      { id: '255', name: 'local' }
    ]

It adheres to the [RoutingTable](https://diosney.github.io/node-iproute/interfaces/RoutingTable.html) interface.

##### `utils.routingTables.add(options, globalOptions?)`

It will add passed in table if it is not already present.

*Add a single table*

	await utils.routingTables.add({
	  id: 50,
	  name: 'table_name'
	});

##### `utils.routingTables.del(options)`

It will remove the specified table if it exists.

	await utils.routingTables.delete({
	  id: 50
	});

##### `utils.routingTables.clear(globalOptions?)`

> **Note:** It will clear/remove all the present tables so use it carefully!

It doesn't immediately flush the route cache, allowing you to continue making changes (like adding new tables) before
the modifications take effect and routes with unreferenced tables are discarded.

*Clear all tables*

    await utils.routingTables.clear();

*Flush route cache so the changes become active*

    import { route } from 'iproute';

	await utils.routingTables.clear();

    await route.flush({
      table: RouteRoutingTables.Cache   // 'cache'
    });
