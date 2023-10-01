import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { SchemaIds } from '../common/constants/schemas';
import { GlobalOptions } from '../common/interfaces/common';
import { TunTapTunnelAddOptions } from './tuntap/add.interfaces';
import { TunTapAddSchema } from './tuntap/add.schema';
import { TunTapTunnelInfo } from './tuntap/show.interfaces';
import { TunTapTunnelShowOptions } from './tuntap/show.interfaces';
import { TunTapShowSchema } from './tuntap/show.schema';

/**
 * Add a new tunnel.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function add(options: TunTapTunnelAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<TunTapTunnelAddOptions>> {

  const cmd = ['ip', 'tuntap', 'add'];

  const ipCmd = new Command<TunTapTunnelAddOptions>(
    SchemaIds.TunTapAdd,
    TunTapAddSchema,
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
 */
export async function del(options: TunTapTunnelAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<TunTapTunnelAddOptions>> {

  const cmd = ['ip', 'tuntap', 'del'];

  const ipCmd = new Command<TunTapTunnelAddOptions>(
    SchemaIds.TunTapAdd,
    TunTapAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * List tunnels.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function show(options: TunTapTunnelShowOptions = {},
                           globalOptions: GlobalOptions     = {}): Promise<Command<TunTapTunnelShowOptions> | TunTapTunnelInfo[]> {

  const cmd = ['ip', 'tuntap', 'show'];

  const ipCmd = new CommandWithReturnedData<TunTapTunnelShowOptions>(
    SchemaIds.TunTapShow,
    TunTapShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<TunTapTunnelInfo[]>();
}

export default {
  add,
  del,
  show,
  list: show,
  lst : show
};