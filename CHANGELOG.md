### Release Notes

### 2.0.0-beta.1

- Fixed badge links URL.
- Updated README image style to look good on npm.

### 2.0.0-beta

- Refactored project to typescript.
- Added full documented interfaces and constants.
- Added input options validations with `ajv`. 
- Added almost all the operations (with some minor exceptions like `link {xstats|afstats|property}`) and all 
  the missing options for the already supported commands from version `1.0.0`. 
- Added tests checking the `cmd` generation and the real command execution.
- Now all `show` commands use the native `iproute` `-json` flag, which prevents many parsing errors.

#### Important Changes From Previous Version

- Treat this version as a new library, though I will document several changes you need to take into account.
- After modifying the routing tables by using the module `utils`, you need now to flush the routing table cache by yourself:
    
      import { route } from 'iproute';

      await route.flush({
        table: RouteRoutingTables.Cache   // 'cache'
      });

- Some methods were renamed, fi, `delete` to `del`, `utils.routingTables.flush` to `utils.routingTables.clear`.
- Since now all `show` commands use the native `iproute` `-json` flag, the output interface is different that the one
  provided by `v1.0.0`.
- The native `monitor` command doesn't support the `-json` flag yet, and since all the manual stdout parsing was removed
  the library `monitor` will only give you the actual `stdout` lines for now, not a parsed object.

### 1.0.2

- Added excluded file to `.gitignore`.

### 1.0.1

- Added simple clarification on README.

### 1.0.0

- (@damoclark) Fix for link devices being deleted in monitor output.
- As module was very stable, bumped version to `1.0.0` so is marked as
  **stable** for registries.
- Added [EditorConfig](http://editorconfig.org/) support.

### 0.7.2

- (@steirico) Fixed missing declaration.

### 0.7.1

- Fixed typo in docs.
- Removed year in license.
 
### 0.7.0

- Improved error logging: changed to use default `Error()` constructor so the stack
 do not get lost.

### 0.6.7

- `ip-address`: Changed `utils.scopes` from an array type to a map (object) type.
- `ip-rule`: Added two new parameters added to `iproute`: `suppress_prefixlength` and `suppress_ifgroup`.
- `ip-route`: Added one new parameters from `iproute`: `quickack` and fixed `onlink` one to behave correctly as a boolean flag.

### 0.6.0

- Added initial `ip-monitor` support for **links**.

### 0.5.0

- Added `ip-route` support.

- Added `ip-utils` utility functions to provide extra functionality that complements `iproute`.

### 0.4.0

- Added `ip-rule` support.

### 0.3.0

- Improved error logging.

- Improved options handling.

### 0.2.0

- Added `ip-address` support.

### 0.1.0

- Added `ip-link` support.