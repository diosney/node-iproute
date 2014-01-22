# node-iproute

Show and manipulate network devices, routing, policy routing and tunnels.

Wrapper around native **iproute** suite to port its functionality to be used in Node.js space.

## Words of Caution

This is still a work in progress and below alpha quality. Its functionality is very limited so use it with caution.

Any issue you may encounter you may report it in the [issue tracker](https://github.com/diosney/node-iproute/issues).

## Installation

	$ npm install iproute

## Motivation

As the current Node.js version all the network related functionality that the built-in modules provide is quite limited,
and mostly only gives read-only information through `os.networkInterfaces()` method, despite the fact that Unix/Linux
networking related functions are awesome.

This module appeal that issue in the Unix/Linux platform by providing methods wrapping the **iproute** user-space suite.

With this module you will be able to interact with the **iproute** commands without have to care about executing directly
any command or so, and will give you several handy utilities that will parse shown information for you.

By using it you will save a lot of boilerplate code that the module do for you and are shared among all commands.

## Requirements

Basically the only system requirement is that the **iproute** utility have to be present in your system.

You can install it in Debian based OSes with:

	sudo apt-get install iproute

Other requirement is about permission levels. To properly execute the provided write methods like `.add()`, `.set()`,
`.delete()`) the application that uses the module must have the proper `sudo` privileges.

## Issues

All patches and **constructive** suggestions are always welcome.

The source is available for download from [GitHub](https://github.com/diosney/node-router)
and there is a [issue tracker](https://github.com/diosney/node-iproute/issues) so you can report bugs there.

## Usage

As a general rule of thumb, all the module identifiers are the same that `iproute` provides, so you can easily use
the module with basic `iproute` knowledge.

### ip link - Network devices configuration.

	var ip_link = require('iproute').link;

#### `iproute` **official manual**: [http://stuff.onse.fi/man?program=ip-link](http://stuff.onse.fi/man?program=ip-link&section=)

#### ip_link.show()

**Examples:**

*Show link information about the `eth0` device*

	ip_link.show({
		dev: 'eth0'
	}, function (error, links) {
		if (error) {
			console.log(error);
		}
		else {
			console.log(links);
		}
	});

*Shortcut to show all links*

	ip_link.show(function (error, links) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(links);
        }
    });

*The same as can be accomplished by passing an empty object as the first parameter*

	ip_link.show({}, function (error, links) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(links);
        }
    });

*The `links` output is an array of links with the expected following structure*

	[{
		index: 1,
		name: 'eth0',
		flags: [
			'NO-CARRIER',
			'BROADCAST',
			'MULTICAST',
			'UP'
		],
		type: 'ether',
		mac: '00:24:d6:1c:2f:a6',
		brd: 'ff:ff:ff:ff:ff:ff',
		mtu: 1500,
		qdisc: 'pfifo_fast',
		state: 'DOWN',
		mode: 'DEFAULT',
		qlen: 1000
	}]

*This is a `links` example in case of a VLAN virtual link*

	[{
		index: 2,
		name: 'eth0.1',
		flags: [
			'NO-CARRIER',
			'BROADCAST',
			'MULTICAST',
			'UP'
		],
		type: 'ether',
		vl_type: 'vlan',
		mac: '00:24:d6:1c:2f:a6',
		brd: 'ff:ff:ff:ff:ff:ff',
		mtu: 1500,
		qdisc: 'noqueue',
		state: 'LOWERLAYERDOWN',
		mode: 'DEFAULT'
	}]

#### ip_link.delete()

**Example:**

	ip_link.delete({
		dev: 'eth0.1@eth0'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_link.add()

**Example:**

	ip_link.add({
		link:       'eth0',
		name:       'eth0.1',
		type:       'vlan',
		type_args:  [{
			id: 1
		}],
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_link.set()

**Example:**

	ip_link.set({
		dev:    'eth0',
		state:  'down'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

### ip address - Protocol address management.

	var ip_address = require('iproute').address;

#### `iproute` **official manual**: [http://stuff.onse.fi/man?program=ip-address](http://stuff.onse.fi/man?program=ip-address&section=)

#### ip_address.show()

**Examples:**

*Show only the `eth0` device addresses*

	ip_address.show({
		dev: 'eth0'
	}, function (error, addresses) {
		if (error) {
			console.log(error);
		}
		else {
			console.log(addresses);
		}
	});

*Shortcut to show all links with its addresses*

	ip_address.show(function (error, addresses) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(addresses);
        }
    });

*The same as can be accomplished by passing an empty object as the first parameter*

	ip_address.show({}, function (error, addresses) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(addresses);
        }
    });

*The `addresses` output is a collection of links with the expected following structure*

	{
		eth0: [{
            type:   'ether',
            mac:    '00:24:be:42:3c:f5',
            brd :   'ff:ff:ff:ff:ff:ff'
        }, {
			type:   'inet',
            address:'10.10.10.10/8',
            scope:  'host'
		}]
	}

#### ip_address.flush()

**Examples:**

	ip_address.flush({
	    dev: 'eth0'
	}, function (error) {
	    if (error) {
	        console.log(error);
	    }
	});

#### ip_address.add()

**Examples:**

	ip_address.add({
		dev:     'eth0',
		scope:   'host',
		address: '10.3.15.3/24'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_address.delete()

**Examples:**

	ip_address.delete({
		address: '10.3.15.3/24'
		dev:     'eth0'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

### ip rule - Routing policy database (RPDB) management.

	var ip_rule = require('iproute').rule;

#### `iproute` **official manual**: [http://stuff.onse.fi/man?program=ip-rule&section=8](http://stuff.onse.fi/man?program=ip-rule&section=8)

#### ip_rule.add()

**Examples:**

*Unicast type rule (the default if not specified)*

	ip_rule.add({
		from:       '192.203.80.0/24',
		table:      'inr.ruhep',
		priority:   '220'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

*NAT type rule*

	ip_rule.add({
		from:       '193.233.7.83',
		nat:        '192.203.80.144',
		table:      '1',
		priority:   '320'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_rule.delete()

**Examples:**

*Delete the unused default rule*

	ip_rule.delete({
		priority: '32767'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_rule.flush()

**Example:**

	ip_rule.flush(function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_rule.show()

**Example:**

	ip_rule.show(function (error, rules) {
		if (error) {
			console.log(error);
		}
		else {
			console.log(rules);
		}
	});

*The `rules` output is an array of rles with the expected following structure*

	[
    	{
    		priority: '0',
    		type    : 'unicast',
    		from    : 'all',
    		lookup  : 'local'
    	},
    	{
    		priority: '320',
    		type    : 'masquerade',
    		from    : '192.233.7.83',
    		lookup  : 'default'
    	},
    	{
    		priority: '32763',
    		type    : 'prohibit',
    		from    : '192.169.16.0/24',
    		lookup  : 'default'
    	},
    	{
    		priority: '32764',
    		type    : 'unreachable',
    		from    : '192.169.16.0/24',
    		lookup  : 'default'
    	},
    	{
    		priority: '32766',
    		type    : 'unicast',
    		from    : 'all',
    		lookup  : 'main'
    	},
    	{
    		priority: '32767',
    		type    : 'unicast',
    		from    : 'all',
    		lookup  : 'default'
    	}
    ]

## Release notes

### 0.4.0

- Added `ip-rule` support.

### 0.3.0

- Improved error logging.

- Improved options handling.

### 0.2.0

- Added `ip-address` support.

### 0.1.0

- Added `ip-link` support.

## License

Copyright (c) 2014 Diosney Sarmiento

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.