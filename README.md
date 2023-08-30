# node-iproute <a href="https://www.buymeacoffee.com/diosney" target="_blank"><img align="right" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="width: 117px !important;" ></a>

Show and manipulate network devices, addresses, routing, policy routing and tunnels.

Wrapper around native **iproute** suite to allow its functionality to be used in Node.js space.

[![docs](https://github.com/diosney/node-iproute/actions/workflows/docs.yml/badge.svg?branch=master)](https://github.com/diosney/node-iproute/actions/workflows/docs.yml)
[![tests](https://github.com/diosney/node-iproute/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/diosney/node-iproute/actions/workflows/tests.yml/badge.svg)
[![npm](https://img.shields.io/npm/v/iproute.svg)](https://www.npmjs.com/package/iproute)
[![GitHub master version](https://img.shields.io/github/package-json/v/diosney/node-iproute/master)](https://github.com/diosney/node-iproute)

## Installation

	$ npm install iproute --save

## Supported Functionality

| Command                                                                                        | Description                                              | Operations                                                                                 |
|------------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [ip-link](https://diosney.github.io/node-iproute/modules/link.html)                            | Network devices configuration.                           | `add`, `del`, `show`, `set`, `change`                                                      |
| [ip-address](https://diosney.github.io/node-iproute/modules/address.html)                      | Protocol address management.                             | `add`, `change`, `replace`, `del`, `flush`, `save`, `restore`, `showdump`, `show`          |
| [ip-route](https://diosney.github.io/node-iproute/modules/route.html)                          | Routing table management.                                | `show`, `flush`, `save`, `restore`, `get`, `add`, `del`, `change`, `append`, `replace`     |
| [ip-rule](https://diosney.github.io/node-iproute/modules/rule.html)                            | Routing policy database (RPDB) management.               | `add`, `del`, `save`, `restore`, `flush`, `show`, `list`                                   |
| [ip-monitor](https://diosney.github.io/node-iproute/modules/monitor.html)                      | State monitoring.                                        | -                                                                                          |
| [utils](https://diosney.github.io/node-iproute/modules/utils.html)                             | Custom utility library that complements `iproute` suite. | -                                                                                          |
| [utils.ipForwarding](https://diosney.github.io/node-iproute/modules/utils.ipForwarding.html)   | Manipulates IP forwarding.                               | `enable`, `disable`, `status`, `v{4\|6}.enable()`, `v{4\|6}.disable()`, `v{4\|6}.status()` |
| [utils.routingTables](https://diosney.github.io/node-iproute/modules/utils.routingTables.html) | Manipulates routing tables.                              | `show`, `add`, `del`, `clear`                                                              |

## Motivation

Given the current Node.js version (`v20.5.1`), the network-related functionality provided by the built-in modules is 
somewhat limited. These modules mainly offer read-only information through the `os.networkInterfaces()` method. This 
design ensures consistency across the various operating systems that Node.js supports. However, it restricts us from 
performing common networking operations, such as adding, editing, or deleting links, addresses, or routes.

This module bridges this gap for the Unix/Linux platform by introducing methods that wrap the **iproute** user-space suite.

With this module, you can:

- Interact seamlessly with **iproute** commands, without the need to directly execute commands or verify option validations.
- Access numerous utilities to modify routing tables and manage forwarding capabilities.
- Eliminate the redundancy of boilerplate code, as the module handles these shared operations across all commands for you.

## Requirements

### Having **iproute** available in the system

The primary requirement is the presence of the  **iproute** utility on the system.

On Debian-based OSes, if it's not already installed, you can do it by issuing:

	sudo apt-get install iproute     # Or `iproute2`

Regarding the **iproute** version, the `-json` option is used for display operations and was introduced in `v4.10.0`.
<br>
Ensure that your system has at least this **iproute** version installed.

### Permission Level

Another requirement concerns permission levels. 
For the successful execution of write methods such as `add()`, `set()`, and `delete()` the application using the 
module must have the appropriate `sudo` privileges. 

One approach to achieve this is by adding a custom user to the system:

`sudo adduser --system --no-create-home iproute` 

then add its permissions in the `/etc/sudoers` file:

`iproute ALL=NOPASSWD: /sbin/ip, /sbin/sysctl`

You can determine the command paths by issuing `which ip` and `which sysctl`.

> **Note:** Modifying the `/etc/sudoers` file directly can be dangerous. It's generally recommended to use the `visudo`
> command when editing this file to prevent syntax errors, which could lock you out of `sudo` capabilities.

And lastly execute the commands with the `sudo: true` global option:

	link.show({}, {
      sudo: true
    });

    ipForwarding.v4.enable({
      sudo: true
    });

## Usage

As a general guideline, the module identifiers and options match those provided by **iproute**. This means you can easily use 
the module with a basic understanding of **iproute**.

There are two specific details that you must be aware of, though:

1. All the options are order sensitive, which means they are parsed in the sequence they appear in the
   provided `options` object, therefore, it's essential to ensure they are in the correct order. To achieve this, 
   you can refer to the command man page sequence or the order listed in the interface definitions.

2. Some options in the `ip` command definition don't have a related key in the respective command line. In the library, 
   those are identified with a trailing underscore `_`, such as `types_`. 
   For autocompletion, you can rely on the type definitions supplied within the library or refer to the interface documentation
   at the [API documentation](https://diosney.github.io/node-iproute/modules.html).

### How to Import

If you are using Javascript, you can import using the regular CommonJS `require` as follows:

    const { link } = require('iproute').default;
    const { link } = require('iproute');
    const iproute  = require('iproute');

If you are using Typescript, you can use the aforementioned `require` calls, or just Ecmascript modules import:

    import { link } from 'iproute';
    import iproute, { link } from 'iproute';
    import * as iproute from 'iproute';

### How to Use

All methods return Promises, so you can use them directly with `.then().catch()` or you can use `async/await`.
Both of these calls are valid:

    const { utils } = require('iproute');
    
    // Using Promises.
    utils
      .ipForwarding
      .enable({ sudo: true })
      .then(() => {
        // Do something;
      })
      .catch(() => {
        // Do something;
      });

    // Using async/await.
    await utils.ipForwarding.enable({ sudo: true });

### Some Important Notes

- All `show` operations use the native `iproute` `-json` flag, which prevents many errors if parsed manually parsing but also
  means the output interfaces are different that the ones provided by `v1.x.x`.

- Now you will have to call `ip route flush table cache` by yourself after modifying the **rules** or the **routing tables**.
  This is so you can do several operations before making the changes active. 

  You can do it by using the following code:

      import { route } from 'iproute';

      await route.flush({
        table: RouteRoutingTables.Cache   // 'cache'
      });

- Need help to complete the interfaces [RuleInfo](https://diosney.github.io/node-iproute/interfaces/RuleInfo.html), 
  [RouteInfo](https://diosney.github.io/node-iproute/interfaces/RouteInfo.html), 
  [LinkInfo](https://diosney.github.io/node-iproute/interfaces/LinkInfo.html), 
  [LinkWithAddressInfo](https://diosney.github.io/node-iproute/interfaces/LinkWithAddressInfo.html).
 
  A **PR** is more than welcome.

## Documentation

The documentation is divided across several files:

- [README.md](https://github.com/diosney/node-iproute/blob/master/README.md) for the main documentation entry point,
- [README-examples.md](https://github.com/diosney/node-iproute/blob/master/README-examples.md) for several code samples
  showcasing how to use the library.
- [TODO.md](https://github.com/diosney/node-iproute/blob/master/TODO.md) A checklist of several items to add or improve upon.
- [Public API site](https://diosney.github.io/node-iproute), which provides a comprehensive index of the library interfaces, constants, enums, and classes.

## Issues

The source code can be accessed on [GitHub](https://github.com/diosney/node-iproute).
<br>
If you encounter any bugs or need a new feature, please report them on the
[issue tracker](https://github.com/diosney/node-iproute/issues).

## Contributing

If you want to contribute just follow the project organization and code style and submit a **PR**.
<br>
If you want to be an official maintainer or contributor just say so, this library is bigger that it seems and there are a
lot of features to add or improve.

For potential features to contribute to, please refer to the [TODO.md](https://github.com/diosney/node-iproute/blob/master/TODO.md) in the project root directory.
This can be especially helpful if you're unsure of what to contribute or if the [issues](https://github.com/diosney/node-iproute/issues) board is empty.

## Tests

**tldr;**
<br>
You can run `npm test`, which is safe to execute as explained below, since it doesn't execute any real commands.

**Long Explanation**
<br>
Since `iproute` can let your box without access to the Internet, the tests are divided in three npm scripts:

- `test:safe`, which are safe to execute even in your regular computer and don't execute any real `iproute` commands,
- `test:exec`, which do execute real commands and can leave the box in an unexpected state if they fail, in which case a simple reboot
          should be enough to restore the default interfaces, addresses and route information.
- `test:all`, which as implies executes both the `test:safe` and the `test:exec` tests.
- `test:github-actions`, which are all except `exec/utils` since Github Actions doesn't allow to modify `rt_tables` nor
   the `sysctl` variables.

For that reason, the default set of tests that are called by `npm test` are the `safe` ones.

If you want to execute all the tests, you can set up a **virtual machine** and execute `npm run test:all` there.

## License

The MIT License (MIT)

Copyright (c) 2014-2023 Diosney Sarmiento

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