## Release notes

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

- `ip-address`: Changed `utils.scopes` from an array type to an map (object) type.
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