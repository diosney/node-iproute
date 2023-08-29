## TODO

### General

- Should contribute `@types/iproute`?

- Some useful global options to add:
    - `ensureOrder` flag by using the schemas to ensure proper options order?
    - `disableValidations` flag to bypass `ajv` options validations.

- Cleaning:
    - Change all remaining `pattern` into `format`. Add respective tests.
    - Should condense `Command` classes by using template method or any other pattern? Or by subclassing is OK?
    - Should add a map to know that options are keyless to remove the `args_` pattern?

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

- The interfaces of the `show` methods needs to be completed. 
  Those interfaces are: `RuleInfo`, `RouteInfo`, `LinkInfo`, `LinkWithAddressInfo`.

### Documentation

- Should publish in the public API?
  - Schemas
  - `Command`s

### Tests

- Add code coverage.
- Add more unit tests. 
- Add Docker to automatize `test:all`.
