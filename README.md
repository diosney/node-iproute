# node-iproute

Show and manipulate network devices, routing, policy routing and tunnels.

Wrapper around native **iproute** suite to port its functionality to be used in Node.js space.

<h2><span style="color:red;">Words of Caution</span></h2>

This is still a work in progress and below alpha quality. Its functionality is very limited (currently
only support **ip-link**) so use it with caution.

Any issue you may encounter you may report it in the [issue tracker](https://github.com/diosney/node-iproute/issues).

## Installation

	$ npm install iproute

## Motivation

As the current Node.js version all the network related functionality that the built-in modules provide is quite limited,
and mostly only gives read-only information through `os.networkInterfaces()` method, despite the fact that Unix/Linux
networking related functions are awesome. This is mainly due the fact that the Node.js developers always wanted to
maintain compatibility among all platform they support, like Windows.

This module appeal that issue in the Unix/Linux platform by providing methods wrapping the OS functionality.

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
the module with basic `iproute` information.

### ip link - Network devices configuration

	var ip_link = require('iproute').link;

#### ip_link.show()

`iproute` **official help**

	ip link show [ DEVICE | group GROUP ]

**Example:**

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

#### ip_link.delete()

`iproute` **official help**

	ip link delete DEV type TYPE [ ARGS ]

**Example:**

	ip_link.delete({
		dev: 'eth0.1@eth0'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_link.add()

`iproute` **official help**

	ip link add [link DEV] [ name ] NAME
				[ txqueuelen PACKETS ]
				[ address LLADDR ]
				[ broadcast LLADDR ]
				[ mtu MTU ]
				[ numtxqueues QUEUE_COUNT ]
				[ numrxqueues QUEUE_COUNT ]
				type TYPE [ ARGS ]

**Example:**

	ip_link.add({
		link: 'eth0',
		name: 'eth0.1',
		type: 'vlan',
		args: [{
			id: 1
		}],
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

#### ip_link.set()

`iproute` **official help**

	ip link set { dev DEVICE | group DEVGROUP } [ { up | down } ]
					[ arp { on | off } ]
					[ dynamic { on | off } ]
					[ multicast { on | off } ]
					[ allmulticast { on | off } ]
					[ promisc { on | off } ]
					[ trailers { on | off } ]
					[ txqueuelen PACKETS ]
					[ name NEWNAME ]
					[ address LLADDR ]
					[ broadcast LLADDR ]
					[ mtu MTU ]
					[ netns PID ]
					[ netns NAME ]
					[ alias NAME ]
					[ vf NUM [ mac LLADDR ]
		 				[ vlan VLANID [ qos VLAN-QOS ] ]
						[ rate TXRATE ] ]
						[ spoofchk { on | off} ] ]
					[ master DEVICE ]
					[ nomaster ]

**Example:**

	ip_link.set({
		dev: 'eth0',
		state: 'down'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

## Release notes

### 0.1.0

- `ip link` complete support.

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