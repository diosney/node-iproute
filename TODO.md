## TODO

### General

- Should contribute `@types/iproute`?

- Cleaning:
    - Change all remaining `pattern` into `format`. Add respective tests.
    - Condense `Command` classes by using template method or any other pattern? Or by subclassing is OK?
    - Add a map to know that options are keyless to remove the `args_` pattern?
    - Add `sonarlint` or `prettify`?

### Commands

- Implement the remaining operations or options that were left out:
  - `link`
    - `set`
      - `macaddr` set of options
    - `xstats`
    - `afstats`
    - `property`
    
- `routingTables.{add|del}`
  - Add support for an array of tables?
 
- `monitor`
  - Should parse output to `json` or wait for `iproute` team to add a `-json` option?
  - Parse object in response to one of the enums, at least the ones that the library supports.
  - Contact native `iproute` developers and ask them to add the `-json` option to `monitor`.

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
