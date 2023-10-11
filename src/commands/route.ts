import CommandWithRedirectFromFilepath from '../common/classes/command-with-redirect-from-filepath';
import CommandWithRedirectToFilepath   from '../common/classes/command-with-redirect-to-filepath';
import CommandWithReturnedData         from '../common/classes/command-with-returned-data';
import Command                         from '../common/classes/command';
import { EmptySchema, SchemaIds }      from '../common/constants/schemas';

import {
  Empty,
  GlobalOptions,
  GlobalOptionsWithRequiredFilePath
} from '../common/interfaces/common';

import { RouteGetOptions }             from './route/get.interfaces';
import { RouteGetSchema }              from './route/get.schema';
import { RouteInfo, RouteShowOptions } from './route/show.interfaces';
import { RouteShowSchema }             from './route/show.schema';
import { RouteAddOptions }             from './route/add.interfaces';
import { RouteAddSchema }              from './route/add.schema';

/**
 * List routes.
 * The command displays the contents of the routing tables or the route(s) selected by some criteria.
 *
 * Warning: Changes to the RPDB made with these commands do not become active immediately.
 * It is assumed that after a script finishes a batch of updates, it flushes the routing cache with
 * `ip route flush cache`.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { route } from 'iproute';
 * ```
 *
 * Show routes from all tables
 * ```
 * const routes = await route.show({
 *   table: RouteRoutingTables.All
 * });
 * ```
 */
export async function show(options: RouteShowOptions    = {},
                           globalOptions: GlobalOptions = {}): Promise<Command<RouteShowOptions> | RouteInfo[]> {

  const cmd = [ 'ip', 'route', 'show' ];

  const ipCmd = new CommandWithReturnedData<RouteShowOptions>(
    SchemaIds.RouteShow,
    RouteShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec<RouteInfo[]>();
}

/**
 * Flush routing tables this command flushes routes selected by some criteria.
 *
 * The arguments have the same syntax and semantics as the arguments of `ip route show`, but routing tables are
 * not listed but purged.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { route } from 'iproute';
 * ```
 *
 * Flush the table cache
 * ```
 * await route.flush({
 *   table: RouteRoutingTables.Cache
 * });
 * ```
 */
export async function flush(options: RouteShowOptions,
                            globalOptions: GlobalOptions = {}): Promise<Command<RouteShowOptions>> {

  const cmd = [ 'ip', 'route', 'flush' ];

  const ipCmd = new Command<RouteShowOptions>(
    SchemaIds.RouteShow,
    RouteShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec();
}

/**
 * Save routing table information.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function save(options: RouteShowOptions = {},
                           globalOptions: GlobalOptionsWithRequiredFilePath): Promise<Command<RouteShowOptions>> {

  const cmd = [ 'ip', 'route', 'save' ];

  const ipCmd = new CommandWithRedirectToFilepath<RouteShowOptions>(
    SchemaIds.RouteShow,
    RouteShowSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Restore routing table information from a file previously generated by {@link save}.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function restore(globalOptions: GlobalOptionsWithRequiredFilePath): Promise<Command<Empty>> {

  const cmd = [ 'ip', 'route', 'restore' ];

  const ipCmd = new CommandWithRedirectFromFilepath<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Get a single route.
 *
 * This command gets a single route to a destination and prints its contents exactly as the  kernel sees it.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function get(options: RouteGetOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<RouteGetOptions> | RouteInfo[]> {

  const cmd = [ 'ip', 'route', 'get' ];

  const ipCmd = new CommandWithReturnedData<RouteGetOptions>(
    SchemaIds.RouteShow,
    RouteGetSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec<RouteInfo[]>();
}

/**
 * Add new route.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { route } from 'iproute';
 * ```
 *
 * Unicast type route (the default if not specified)
 * ```
 * await route.add({
 *   to_:	'10.0.0.0/24',
 *   via:	{
 *     address_: '192.168.56.1'
 *   }
 * });
 * ```
 *
 * Multipath route with load balance between devices
 * ```
 * await route.add({
 *   to_:	  'default',
 *   scope:	AddressScopes.Global,
 *   nexthops_:  [{
 *     nexthop: true,
 *     dev:     'ppp0'
 *   },
 *   {
 *     nexthop: true,
 *     dev:     'ppp1'
 *   }]
 * });
 * ```
 *
 * A NAT route
 * ```
 * await route.add({
 *   type_:	RoutingTableTypes.Nat,
 *   to_:	    '10.0.0.0/24',
 *   table:	300,
 *   via:	{
 *     address_: '192.168.56.1'
 *   }
 * });
 * ```
 */
export async function add(options: RouteAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<RouteAddOptions>> {

  const cmd = [ 'ip', 'route', 'add' ];

  const ipCmd = new Command<RouteAddOptions>(
    SchemaIds.RouteAdd,
    RouteAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Delete route.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { route } from 'iproute';
 * ```
 *
 * Delete multipath route with load balance between devices
 * ```
 * await route.del({
 *   to_:	  'default',
 *   scope:	AddressScopes.Global,
 *   nexthops_:  [{
 *     nexthop: true,
 *     dev:     'ppp0'
 *   },
 *   {
 *     nexthop: true,
 *     dev:     'ppp1'
 *  }]
 * });
 * ```
 */
export async function del(options: RouteAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<RouteAddOptions>> {

  const cmd = [ 'ip', 'route', 'delete' ];

  const ipCmd = new Command<RouteAddOptions>(
    SchemaIds.RouteAdd,
    RouteAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Change route.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function change(options: RouteAddOptions,
                             globalOptions: GlobalOptions = {}): Promise<Command<RouteAddOptions>> {

  const cmd = [ 'ip', 'route', 'change' ];

  const ipCmd = new Command<RouteAddOptions>(
    SchemaIds.RouteAdd,
    RouteAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Append route.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function append(options: RouteAddOptions,
                             globalOptions: GlobalOptions = {}): Promise<Command<RouteAddOptions>> {

  const cmd = [ 'ip', 'route', 'append' ];

  const ipCmd = new Command<RouteAddOptions>(
    SchemaIds.RouteAdd,
    RouteAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Change or add new one.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { route } from 'iproute';
 * ```
 *
 * Unicast type route (the default if not specified)
 * ```
 * await route.add({
 *   to_:	'10.0.0.0/24',
 *   via:	{
 *     address_: '192.168.56.1'
 *   }
 * });
 * ```
 *
 * Multipath route with load balance between devices
 * ```
 * await route.add({
 *   to_:	  'default',
 *   scope:	AddressScopes.Global,
 *   nexthops_:  [{
 *     nexthop: true,
 *     dev:     'ppp0'
 *   },
 *   {
 *     nexthop: true,
 *     dev:     'ppp1'
 *   }]
 * });
 * ```
 *
 * A NAT route
 * ```
 * await route.add({
 *   type_:	RoutingTableTypes.Nat,
 *   to_:	    '10.0.0.0/24',
 *   table:	300,
 *   via:	{
 *     address_: '192.168.56.1'
 *   }
 * });
 * ```
 */
export async function replace(options: RouteAddOptions,
                              globalOptions: GlobalOptions = {}): Promise<Command<RouteAddOptions>> {

  const cmd = [ 'ip', 'route', 'replace' ];

  const ipCmd = new Command<RouteAddOptions>(
    SchemaIds.RouteAdd,
    RouteAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

export default {
  show,
  flush,
  save,
  restore,
  get,
  add,
  del,
  change,
  append,
  replace
};