import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command                 from '../common/classes/command';
import { SchemaIds }           from '../common/constants/schemas';
import { GlobalOptions }       from '../common/interfaces/common';
import { LinkAddOptions }      from './link/add.interfaces';
import { LinkAddSchema }       from './link/add.schema';
import { LinkDeleteOptions }   from './link/delete.interfaces';
import { LinkDeleteSchema }    from './link/delete.schema';
import { LinkSetOptions }      from './link/set.interfaces';
import { LinkSetSchema }       from './link/set.schema';

import {
  LinkShowOptions,
  LinkInfo
} from './link/show.interfaces';

import { LinkShowSchema } from './link/show.schema';

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
                          globalOptions: GlobalOptions = {}): Promise<Command<LinkAddOptions>> {

  const cmd = [ 'ip', 'link', 'add' ];

  const ipCmd = new Command<LinkAddOptions>(
    SchemaIds.LinkAdd,
    LinkAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
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
export async function del(options: LinkDeleteOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<LinkDeleteOptions>> {

  const cmd = [ 'ip', 'link', 'delete' ];

  const ipCmd = new Command<LinkDeleteOptions>(
    SchemaIds.LinkDelete,
    LinkDeleteSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
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
export async function show(options: LinkShowOptions     = {},
                           globalOptions: GlobalOptions = {}): Promise<Command<LinkShowOptions> | LinkInfo[]> {

  const cmd = [ 'ip', 'link', 'show' ];

  const ipCmd = new CommandWithReturnedData<LinkShowOptions>(
    SchemaIds.LinkShow,
    LinkShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec<LinkInfo[]>();
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
                          globalOptions: GlobalOptions = {}): Promise<Command<LinkSetOptions>> {

  const cmd = [ 'ip', 'link', 'set' ];

  const ipCmd = new Command<LinkSetOptions>(
    SchemaIds.LinkSet,
    LinkSetSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

export default {
  add,
  del,
  show,
  set,
  change: set
};