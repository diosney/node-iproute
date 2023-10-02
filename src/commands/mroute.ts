import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { SchemaIds } from '../common/constants/schemas';
import { GlobalOptions } from '../common/interfaces/common';
import { MrouteInfo, MrouteShowOptions } from './mroute/show.interfaces';
import { MrouteShowSchema } from './mroute/show.schema';

/**
 * List multicast routing cache entries.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function show(options: MrouteShowOptions,
                           globalOptions: GlobalOptions = {}): Promise<Command<MrouteShowOptions> | MrouteInfo[]> {

  const cmd = ['ip', 'mroute', 'show'];

  const ipCmd = new CommandWithReturnedData<MrouteShowOptions>(
    SchemaIds.MrouteShow,
    MrouteShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<MrouteInfo[]>();
}

export default {
  show
};