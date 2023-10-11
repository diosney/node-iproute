import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { EmptySchema, SchemaIds } from '../common/constants/schemas';

import {
  Empty,
  GlobalOptions
} from '../common/interfaces/common';

import { AddrlabelAddOptions } from './addrlabel/add.interfaces';
import { AddrlabelAddSchema } from './addrlabel/add.schema';
import { AddrlabelInfo } from './addrlabel/list.interfaces';
import { AddrlabelDelOptions } from './addrlabel/del.interfaces';
import { AddrlabelDelSchema } from './addrlabel/del.schema';

/**
 * Add an address label entry to the kernel.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Add an address label
 * ```
 * await addrlabel.add({
 *   prefix: '2001:db8::/32',
 *   label:   100,
 * });
 * ```
 */
export async function add(options: AddrlabelAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<AddrlabelAddOptions>> {

  const cmd = ['ip', 'addrlabel', 'add'];

  const ipCmd = new Command<AddrlabelAddOptions>(
    SchemaIds.AddrlabelAdd,
    AddrlabelAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Delete an address label.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Delete an address label
 * ```
 * await addrlabel.del({
 *   prefix: '2001:db8::/32'
 * });
 * ```
 */
export async function del(options: AddrlabelDelOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<AddrlabelDelOptions>> {

  const cmd = ['ip', 'addrlabel', 'del'];

  const ipCmd = new Command<AddrlabelDelOptions>(
    SchemaIds.AddrlabelDel,
    AddrlabelDelSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Delete all the address labels in the kernel.
 * This does not restore any default settings.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Flush address labels
 * ```
 * await addrlabel.flush();
 * ```
 */
export async function flush(globalOptions: GlobalOptions = {}): Promise<Command<Empty>> {
  const cmd = ['ip', 'addrlabel', 'flush'];

  const ipCmd = new Command<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * List the current address label entries in the kernel.
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
 * import { addrlabel } from 'iproute';
 * ```
 *
 * Show all address labels
 * ```
 * const labels = await addrlabel.list();
 * ```
 */
export async function list(globalOptions: GlobalOptions = {}): Promise<Command<Empty> | AddrlabelInfo[]> {

  const cmd = ['ip', 'addrlabel', 'list'];

  const ipCmd = new CommandWithReturnedData<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec<AddrlabelInfo[]>();
}

export default {
  add,
  del,
  flush,
  list
};