import IpCommand             from '../../common/classes/ip-command';
import { SchemaIds }         from '../../common/constants/schemas';
import { GlobalOptions }     from '../../common/interfaces/common';
import { LinkAddOptions }    from './models/add.interfaces';
import { LinkAddSchema }     from './models/add.schema';
import { LinkDeleteOptions } from './models/delete.interfaces';
import { LinkDeleteSchema }  from './models/delete.schema';
import { LinkSetOptions }    from './models/set.interfaces';
import { LinkSetSchema }     from './models/set.schema';

import {
  LinkShowOptions,
  LinkShowLinkInfo
} from './models/show.interfaces';

import { LinkShowSchema } from './models/show.schema';

/**
 * Adds a virtual link.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function add(options: LinkAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<IpCommand<LinkAddOptions>> {

  const cmd = ['ip', 'link', 'add'];

  const ipCmd = new IpCommand<LinkAddOptions>(
    SchemaIds.LinkAdd,
    LinkAddSchema,
    options,
    globalOptions,
    cmd);

  await ipCmd.exec();
  return ipCmd;
}

/**
 * Deletes a virtual link.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function deleteLink(options: LinkDeleteOptions,
                                 globalOptions: GlobalOptions = {}): Promise<IpCommand<LinkDeleteOptions>> {

  const cmd = ['ip', 'link', 'delete'];

  const ipCmd = new IpCommand<LinkDeleteOptions>(
    SchemaIds.LinkDelete,
    LinkDeleteSchema,
    options,
    globalOptions,
    cmd);

  await ipCmd.exec();
  return ipCmd;
}

/**
 * Display device attributes.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function show(options: LinkShowOptions,
                           globalOptions: GlobalOptions = {}): Promise<IpCommand<LinkShowOptions> | LinkShowLinkInfo[]> {

  const cmd = ['ip', 'link', 'show'];

  const ipCmd = new IpCommand<LinkShowOptions>(
    SchemaIds.LinkShow,
    LinkShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.execAndReturnData<LinkShowLinkInfo[]>();
}

/**
 * Change device attributes.
 *
 * Warning: If multiple parameter changes are requested, `ip` aborts immediately after any
 * of the changes have failed.
 *
 * This is the only case when `ip` can move the system to an
 * unpredictable state. The solution is to avoid changing several parameters with one `ip link set` call.
 * The modifier `change` is equivalent to `set`.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function set(options: LinkSetOptions,
                          globalOptions: GlobalOptions = {}): Promise<IpCommand<LinkSetOptions>> {

  const cmd = ['ip', 'link', 'set'];

  const ipCmd = new IpCommand<LinkSetOptions>(
    SchemaIds.LinkSet,
    LinkSetSchema,
    options,
    globalOptions,
    cmd);

  await ipCmd.exec();
  return ipCmd;
}

/**
 * Alias for {@link set}.
 * @see {@link set}
 */
export async function change(options: LinkSetOptions,
                             globalOptions: GlobalOptions = {}): Promise<IpCommand<LinkSetOptions>> {

  return set(options, globalOptions);
}

export default {
  add,
  deleteLink,
  show,
  set,
  change
};