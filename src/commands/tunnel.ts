import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { EmptySchema, SchemaIds } from '../common/constants/schemas';
import { Empty, GlobalOptions } from '../common/interfaces/common';
import { TunnelAddOptions } from './tunnel/add.interfaces';
import { TunnelAddSchema } from './tunnel/add.schema';
import { TunnelInfo } from './tunnel.constants';
import { TunnelPrlSchema } from './tunnel/prl.schema';
import { TunnelPrlOptions } from './tunnel/prl.interfaces';
import { Tunnel6rdOptions } from './tunnel/6rd.interfaces';
import { Tunnel6rdSchema } from './tunnel/6rd.schema';

/**
 * Add a new tunnel.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Create a new tunnel
 * ```
 * await tunnel.add({
 *   name  : 'tun0',
 *   mode  : TunnelModes.Gre,
 *   remote: '203.0.113.4',
 *   local : '203.0.113.5',
 *   dev   : 'eth0'
 * });
 * ```
 */
export async function add(options: TunnelAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<TunnelAddOptions>> {

  const cmd = ['ip', 'tunnel', 'add'];

  const ipCmd = new Command<TunnelAddOptions>(
    SchemaIds.TunnelAdd,
    TunnelAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Destroy a tunnel.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Delete a tunnel
 * ```
 * await tunnel.del({
 *   name: 'tun0'
 * });
 * ```
 */
export async function del(options: TunnelAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<TunnelAddOptions>> {

  const cmd = ['ip', 'tunnel', 'del'];

  const ipCmd = new Command<TunnelAddOptions>(
    SchemaIds.TunnelAdd,
    TunnelAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Change an existing tunnel.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Modify an existing tunnel
 * ```
 * await tunnel.change({
 *   name  : 'tun0',
 *   mode  : TunnelModes.Ipip,
 *   remote: '203.0.113.6',
 *   local : '203.0.113.7',
 *   dev   : 'eth1'
 * });
 * ```
 */
export async function change(options: TunnelAddOptions,
                             globalOptions: GlobalOptions = {}): Promise<Command<TunnelAddOptions>> {

  const cmd = ['ip', 'tunnel', 'change'];

  const ipCmd = new Command<TunnelAddOptions>(
    SchemaIds.TunnelAdd,
    TunnelAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * List tunnels.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 *
 * @example
 *
 * Import module
 * ```
 * import { tunnel } from 'iproute';
 * ```
 *
 * Show tunnels
 * ```
 * const entries = await tunnel.show({});
 * ```
 */
export async function show(globalOptions: GlobalOptions = {}): Promise<Command<Empty> | TunnelInfo[]> {

  const cmd = ['ip', 'tunnel', 'show'];

  const ipCmd = new CommandWithReturnedData<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<TunnelInfo[]>();
}

/**
 * Potential router list (ISATAP only).
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function prl(options: TunnelPrlOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<TunnelPrlOptions>> {

  const cmd = ['ip', 'tunnel', 'prl'];

  const ipCmd = new Command<TunnelPrlOptions>(
    SchemaIds.TunnelPrl,
    TunnelPrlSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Specifies the 6rd (IPv6 Rapid Deployment) tunneling mechanism.
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
 * import { tunnel } from 'iproute';
 * ```
 *
 * Configures 6rd tunneling mechanism.
 * ```
 * await tunnel.6rd({
 *   dev        : 'eth0',
 *   6rd_prefix : '2001:db8::'
 * });
 * ```
 */
export async function v6Rd(options: Tunnel6rdOptions,
                           globalOptions: GlobalOptions = {}): Promise<Command<Tunnel6rdOptions>> {

  const cmd = ['ip', 'tunnel', '6rd'];

  const ipCmd = new Command<Tunnel6rdOptions>(
    SchemaIds.Tunnel6rd,
    Tunnel6rdSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

export default {
  add,
  del,
  change,
  show,
  prl,
  v6Rd
};