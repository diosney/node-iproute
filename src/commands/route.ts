import IpCommandWithRedirectFromFilepath from '../common/classes/ip-command-with-redirect-from-filepath';
import IpCommandWithRedirectToFilepath   from '../common/classes/ip-command-with-redirect-to-filepath';
import IpCommandWithReturnedData         from '../common/classes/ip-command-with-returned-data';
import IpCommand                         from '../common/classes/ip.command';
import { EmptySchema, SchemaIds }        from '../common/constants/schemas';

import {
  EmptyOptions,
  GlobalOptions,
  GlobalOptionsWithRequiredFilePath
} from '../common/interfaces/common';

import { RouteGetOptions }             from './route/get.interfaces';
import { RouteGetSchema }              from './route/get.schema';
import { RouteInfo, RouteShowOptions } from './route/show.interfaces';
import { RouteShowSchema }             from './route/show.schema';

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
 */
export async function show(options: RouteShowOptions,
                           globalOptions: GlobalOptions = {}): Promise<IpCommand<RouteShowOptions> | RouteInfo[]> {

  const cmd = ['ip', 'route', 'show'];

  const ipCmd = new IpCommandWithReturnedData<RouteShowOptions>(
    SchemaIds.RouteShow,
    RouteShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
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
 */
export async function flush(options: RouteShowOptions,
                            globalOptions: GlobalOptions = {}): Promise<IpCommand<RouteShowOptions>> {

  const cmd = ['ip', 'route', 'flush'];

  const ipCmd = new IpCommand<RouteShowOptions>(
    SchemaIds.RouteShow,
    RouteShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
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
export async function save(options: RouteShowOptions,
                           globalOptions: GlobalOptionsWithRequiredFilePath): Promise<IpCommand<RouteShowOptions>> {

  const cmd = ['ip', 'route', 'save'];

  const ipCmd = new IpCommandWithRedirectToFilepath<RouteShowOptions>(
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
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function restore(options: EmptyOptions = {},
                              globalOptions: GlobalOptionsWithRequiredFilePath): Promise<IpCommand<EmptyOptions>> {

  const cmd = ['ip', 'route', 'restore'];

  const ipCmd = new IpCommandWithRedirectFromFilepath<EmptyOptions>(
    SchemaIds.Empty,
    EmptySchema,
    options,
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
                          globalOptions: GlobalOptions = {}): Promise<IpCommand<RouteGetOptions> | RouteInfo[]> {

  const cmd = ['ip', 'route', 'get'];

  const ipCmd = new IpCommandWithReturnedData<RouteGetOptions>(
    SchemaIds.RouteShow,
    RouteGetSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<RouteInfo[]>();
}

export default {
  show,
  flush,
  save,
  restore,
  get
};