# utils

General helpful utils to provide extra handy functionality not present in `iproute`.

## Usage

	var ip_utils = require('iproute').utils;

## ip_utils.ip_forward

### ip_utils.ip_forward.v{4,6}.path

Path to IP forwarding kernel setting file path.

### ip_utils.ip_forward.v{4,6}.enable()
### ip_utils.ip_forward.v{4,6}.disable()
### ip_utils.ip_forward.v{4,6}.status()

### ip_utils.ip_forward.enable()
### ip_utils.ip_forward.disable()
### ip_utils.ip_forward.status()

## ip_utils.routing_tables

Useful routing tables interaction functions, like create table, delete table, show tables, and so on.

It effectively provide wrapper functions to manage the `/etc/iproute/rt_tables` file.

### ip_utils.routing_tables.tables_path

IP routing tables file path.

### ip_utils.routing_tables.show()

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

### ip_utils.routing_tables.add()

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