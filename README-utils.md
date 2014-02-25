# utils

General helpful utils to provide extra handy functionality not present in `iproute`.

## Usage

	var ip_utils = require('iproute').utils;

## ip_utils.ip_forward

### ip_utils.ip_forward.v{4,6}.path

Path to IP forwarding kernel setting file path.

### ip_utils.ip_forward.v{4,6}.enable(cb)
### ip_utils.ip_forward.v{4,6}.disable(cb)
### ip_utils.ip_forward.v{4,6}.status(cb)

### ip_utils.ip_forward.enable(cb)
### ip_utils.ip_forward.disable(cb)
### ip_utils.ip_forward.status(cb)

## ip_utils.routing_tables

Useful routing tables interaction functions, like create table, delete table, show tables, and so on.

It effectively provide wrapper functions to manage the `/etc/iproute/rt_tables` file.

### ip_utils.routing_tables.tables_path

IP routing tables file path.

### ip_utils.routing_tables.show([options,] cb)

**Examples:**

*Show all tables*

	ip_utils.routing_tables.show(function (error, tables) {
		if (error) {
			console.log(error);
		}
		else {
			console.log(tables);
		}
	});

*Show table with `id` 255*

	ip_utils.routing_tables.show({
		id: 255
	}, function (error, tables) {
		if (error) {
			console.log(error);
		}
		else {
			console.log(tables);
		}
	});

*Show table with `name` `local`*

	ip_utils.routing_tables.show({
		name: 'local'
	}, function (error, tables) {
		if (error) {
			console.log(error);
		}
		else {
			console.log(tables);
		}
	});

*The `tables` output is an array of tables with the expected following structure*

	[
	  { id: '254', name: 'main' },
      { id: '0', name: 'unspec' },
      { id: '253', name: 'default' },
      { id: '255', name: 'local' }
    ]

### ip_utils.routing_tables.add(options, cb)

It will add the tables passed in if they are not already present.

**Examples:**

*Add a single table*

	ip_utils.routing_tables.add({
		id: 50,
		name: 'table_name'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

*Add a single table but using an array instead of an object*

	ip_utils.routing_tables.add([{
		id: 50,
		name: 'table_name'
	}], function (error) {
		if (error) {
			console.log(error);
		}
	});

*Add a several tables by passing an array*

	ip_utils.routing_tables.add([
	{
		id: 50,
		name: 'table_name_50'
	},
	{
    	id: 60,
    	name: 'table_name_60'
    }
	], function (error) {
		if (error) {
			console.log(error);
		}
	});

### ip_utils.routing_tables.delete(options, cb)

It will add the tables passed in if they are not already present.

*Add a single table*

	ip_utils.routing_tables.delete({
		id: 50
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

### ip_utils.routing_tables.flush(cb)

It will flush all the present tables so use it carefully!

It doesn't flush the route cache afterwards, so you can keep making changes (add some new tables) before the changes
become active and all routes with unreferenced tables are lost.

**Examples:**

*Flush all tables*

	ip_utils.routing_tables.flush(function (error) {
		if (error) {
			console.log(error);
		}
	});

*Flush route cache so the changes become active*

	ip_utils.routing_tables.flush(function (error) {
		if (error) {
			console.log(error);
		}
		else {
			ip_route.flush({
        		table: 'cache'
        	}, function (error) {
        		if (error) {
        			console.log(error);
        		}
        	});
		}
	});