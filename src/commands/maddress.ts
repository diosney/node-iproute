import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { SchemaIds } from '../common/constants/schemas';
import { GlobalOptions } from '../common/interfaces/common';
import { MaddressAddOptions } from './maddress/add.interfaces';
import { MaddressAddSchema } from './maddress/add.schema';
import { MaddressInfo, MaddressShowOptions } from './maddress/show.interfaces';
import { MaddressShowSchema } from './maddress/show.schema';

/**
 * Add a multicast address.
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
 * import { maddress } from 'iproute';
 * ```
 *
 * Add a multicast address
 * ```
 * await maddress.add({
 *   address_: '33:33:00:00:00:01',
 *   dev: 'enp0s3'
 * });
 * ```
 */
export async function add(options: MaddressAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<MaddressAddOptions>> {

  const cmd = ['ip', 'maddress', 'add'];

  const ipCmd = new Command<MaddressAddOptions>(
    SchemaIds.MaddressAdd,
    MaddressAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Delete a multicast address.
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
 * import { maddress } from 'iproute';
 * ```
 *
 * Delete a tunnel
 * ```
 * await maddress.del({
 *   address_: '33:33:00:00:00:01',
 *   dev: 'enp0s3'
 * });
 * ```
 */
export async function del(options: MaddressAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<MaddressAddOptions>> {

  const cmd = ['ip', 'maddress', 'del'];

  const ipCmd = new Command<MaddressAddOptions>(
    SchemaIds.MaddressAdd,
    MaddressAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * List multicast addresses.
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
 * import { maddress } from 'iproute';
 * ```
 *
 * Show multicast addresses
 * ```
 * const entries = await maddress.show({});
 * ```
 */
export async function show(options: MaddressShowOptions,
                           globalOptions: GlobalOptions = {}): Promise<Command<MaddressShowOptions> | MaddressInfo[]> {

  const cmd = ['ip', 'maddress', 'show'];

  const ipCmd = new CommandWithReturnedData<MaddressShowOptions>(
    SchemaIds.MaddressShow,
    MaddressShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<MaddressInfo[]>();
}

export default {
  add,
  del,
  show
};