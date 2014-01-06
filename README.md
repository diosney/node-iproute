# node-iproute

Show and manipulate network devices, routing, policy routing and tunnels.

Wrapper around native **iproute** suite to port its functionality to be used in Node.js space.

## <span style="color:red;">Words of Caution</span>

This is still a work in progress and below alpha quality. Its functionality is very limited (currently
only support **ip-link**) so use it with caution.

Any issue you may encounter you may report it in the [issue tracker](https://github.com/diosney/node-iproute/issues).

## Installation

	$ npm install iproute

## Motivation

As the current Node.js version all the network related functionality that the built-in modules provide is quite limited,
and mostly only gives read-only information through `os.networkInterfaces()` method.

With this module you will be able to interact with the **iproute** commands without have to care about executing directly
any command or so.

By using it you will save a lot of boilerplate code that the module do for you and share among all
commands.

## Requirements

The only requirement is that the **iproute** utility have to be present in your system.

You can install it in Debian based OSes with:

	sudo apt-get install iproute

## Tests

All the tests are written using [Mocha](https://github.com/visionmedia/mocha) test framework.

Run them by issuing:

	$ mocha
or

	$ make test

## Issues

All patches and **constructive** suggestions are always welcome.

The source is available for download from [GitHub](https://github.com/diosney/node-router)
and there is a [issue tracker](https://github.com/diosney/node-iproute/issues) so you can report bugs there.

## Usage

### ip link

	var ip_link = require('iproute').link;

#### .show()

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

#### .delete()

**Example:**

	ip_link.delete({
		dev: 'eth0.1@eth0'
	}, function (error) {
		if (error) {
			console.log(error);
		}
	});

## Release notes

The section will be start to be used when we reach version 0.1.0.

## Credits

**Author:** [Diosney Sarmiento](mailto:diosney.s@gmail.com)