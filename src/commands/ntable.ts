import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { SchemaIds } from '../common/constants/schemas';
import { GlobalOptions } from '../common/interfaces/common';
import { NtableShowSchema } from './ntable/show.schema';
import { NtableInfo, NtableShowOptions } from './ntable/show.interfaces';
import { NtableChangeSchema } from './ntable/change.schema';
import { NtableChangeOptions } from './ntable/change.interfaces';

/**
 * Modify table parameter.
 * Allows modifying table parameters such as timers and queue lengths.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function change(options: NtableChangeOptions,
                             globalOptions: GlobalOptions = {}): Promise<Command<NtableChangeOptions>> {

  const cmd = ['ip', 'ntable', 'change'];

  const ipCmd = new Command<NtableChangeOptions>(
    SchemaIds.NtableChange,
    NtableChangeSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * List the ip neighbour tables.
 * This commands displays neighbour table parameters and statistics.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function show(options: NtableShowOptions   = {},
                           globalOptions: GlobalOptions = {}): Promise<Command<NtableShowOptions> | NtableInfo[]> {

  const cmd = ['ip', 'ntable', 'show'];

  const ipCmd = new CommandWithReturnedData<NtableShowOptions>(
    SchemaIds.NtableShow,
    NtableShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<NtableInfo[]>();
}

export default {
  change,
  show
};