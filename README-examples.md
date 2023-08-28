# Examples

Here you have several usage examples to give you an idea of what you can do with the library.

## `ip link` Network devices configuration / [Man Page](https://man7.org/linux/man-pages/man8/ip-link.8.html).

	import { link } from 'iproute';

### `link.show(options?, globalOptions?)`

**Examples:**

*Show link information about the `eth0` device*

	const links = await link.show({
	  dev: 'eth0'
	});

*Shortcut to show all links*

	const links = await link.show();
	const links = await link.show({});

The `links` output is an array of links with the matching `RoutingTable[]` interface which you can see at TODO:Typedoc.

### `link.del(options, globalOptions?)`

**Example:**

	await link.del({
	  dev_: 'eth0.1@eth0'
	});

### `link.add(options, globalOptions?)`

**Example:**

	await link.add({
	  link:    'lo',
      name:    'dummy100',
      address: '00:11:22:33:44:55',
      mtu:     1500,
      type:    VirtualLinkTypes.Dummy
	});

## `ip address` Protocol address management / [Man Page](https://man7.org/linux/man-pages/man8/ip-address.8.html).

	import { address } from 'iproute';

### `address.show(options?, globalOptions?)`

**Examples:**

*Show only the `eth0` device addresses*

	const addresses = await address.show({
	  dev: 'eth0'
	});

    const addresses = await address.show();
    const addresses = await address.show({});

The `addresses` output is an array of links with the matching `LinkWithAddressInfo[]` interface which you can see at TODO:Typedoc.

### `address.flush(options, globalOptions?)`

**Examples:**

	await address.flush({
	  dev: 'eth0'
	});

### `address.add(options, globalOptions?)`

**Examples:**

	await address.add({
	  local:  '10.3.15.3/24',
	  scope:  AddressScopes.Host,    // 'host'
	  dev:	 'eth0'
	});

### `address.del(options, globalOptions?)`

**Examples:**

	await address.del({
	  local: '10.3.15.3/24'
	  dev:	 'eth0'
	});

## `ip route` Routing table management / [Man Page](https://man7.org/linux/man-pages/man8/ip-route.8.html).

	import { route } from 'iproute';

### `route.show(options?, globalOptions?)`

**Example:**

	const routes = await route.show({
	  table: RouteRoutingTables.All    // 'all'
	});

The `routes` output is an array of routes with the matching `RouteInfo[]` interface which you can see at TODO:Typedoc.

### route.flush(options, globalOptions?)

**Examples:**

	await route.flush({
	  table: RouteRoutingTables.Cache   // 'cache'
	});

### `route.add(options, globalOptions?)`
### `route.replace(options, globalOptions?)`

**Examples:**

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

### `route.del(options, globalOptions?)`

**Examples:**

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

## `ip rule` Routing policy database (RPDB) management / [Man Page](https://man7.org/linux/man-pages/man8/ip-rule.8.html).

	import { rule } from 'iproute';

### `rule.add(options, globalOptions?)`

**Examples:**

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

### `rule.del(options, globalOptions?)`

**Examples:**

*Delete the unused default rule*

	await rule.del({
	  preference: 32767
	});

### `rule.flush(globalOptions?)`

**Example:**

	await rule.flush();

### `rule.show(options?, globalOptions?)`

**Example:**

	const rules = await rule.show();

The `rules` output is an array of routes with the matching `RuleInfo[]` interface which you can see at TODO:Typedoc.

## `ip monitor` State monitoring / [Man Page](https://man7.org/linux/man-pages/man8/ip-monitor.8.html).

	import { monitor } from 'iproute';

### `monitor(options, globalOptions?)`

**Examples:**

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
    
      command.emitter.on(MonitorObjects.All, (data: MonitorEmittedData) => {
        // Do something.      
      });
    
      command.emitter.on('error', (error) => {
        // Do something.
      });
    });

    setTimeout(() => {
       command.close();
    }, 5000)


The `data` object will hold the `iproute` output data, which at this moment doesn't support the `-json` option, so right
now will conform to the interface `MonitorEmittedData` which you can see at TODO:Typedoc.

## utils

General helpful utils to provide extra handy functionality not present in `iproute`, like routing table manipulation
and IP forwarding configuration.

See the complete API documentation at TODO:Tsdoc

	import { utils } from 'iproute';

### `utils.ipForwarding`

Allows you to enable/disable IP forwarding, and query for its status.

Specific IPv4 or IPv6 methods:

    await utils.ipForwarding.v{4|6}.enable()
    await utils.ipForwarding.v{4|6}.disable()

    const status = await utils.ipForwarding.v{4|6}.status()

General methods affecting both IPv4 and IPv6:

    await utils.ipForwarding.enable()
    await utils.ipForwarding.disable()

    const status = await utils.ipForwarding.status()

### `utils.routingTables`

Provides routing tables manipulation functions, like table creation, deletion and querying.

Those are wrapper functions to manage the `/etc/iproute/rt_tables` file.

> **Note:** You have to flush the routing cache after making modifications in the routing tables:
>
>     import { route } from 'iproute';
>
>     await route.flush({
>       table: RouteRoutingTables.Cache   // 'cache'
>     });

#### `utils.routingTables.show(options?, globalOptions?)`

**Examples:**

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

It adheres to the `RoutingTable[]` interface which you can see at TODO:Typedoc.

#### `utils.routingTables.add(options, globalOptions?)`

It will add passed in table if it is not already present.

**Examples:**

*Add a single table*

	await utils.routingTables.add({
	  id: 50,
	  name: 'table_name'
	});

#### `utils.routingTables.del(options)`

It will remove the specified table if it exists.

	await utils.routingTables.delete({
	  id: 50
	});

#### `utils.routingTables.clear(globalOptions?)`

> **Note:** It will clear/remove all the present tables so use it carefully!

It doesn't immediately flush the route cache, allowing you to continue making changes (like adding new tables) before
the modifications take effect and routes with unreferenced tables are discarded.

**Examples:**

*Clear all tables*

    await utils.routingTables.clear();

*Flush route cache so the changes become active*

    import { route } from 'iproute';

	await utils.routingTables.clear();

    await route.flush({
      table: RouteRoutingTables.Cache   // 'cache'
    });