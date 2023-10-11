## TODO

### General

- Should contribute `@types/iproute`?

- Cleaning:
    - Change all remaining `pattern` into `format`. Add respective tests.
    - Add `sonarlint` or `prettify`?

### Commands

- Implement the remaining operations or options that were left out:
  - `link`
    - `set`
      - `macaddr` set of options
    - `xstats`
    - `afstats`
    - `property`
    
- `monitor`
  - Should parse output to `json` or wait for `iproute` team to add a `-json` option?

- The interfaces of the `show` methods need to be completed. 
  Those interfaces are: `RuleInfo`, `RouteInfo`, `LinkInfo`, `LinkWithAddressInfo`.

- `neighbour`
  - Add `get` support after `json` support gets added.
  - Add exec tests.

- `tunnel`
  - Add exec tests.

- `tuntap`
  - Add manpage links when it gets created since it doesn't exist yet.

### Documentation

- Document every property with schema `format` as a `@see {@link}` in the interfaces?.

### Contact `ip` Developers

- Add `-json` support for:
  - `monitor`
  - `ip neigh get`

### Tests

- Add Docker to automatize `test:all`.
- Add code coverage.
- Add more unit tests. 
