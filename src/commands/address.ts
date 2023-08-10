import IpCommandWithRedirectFromFilepath from '../common/classes/ip-command-with-redirect-from-filepath';
import IpCommandWithRedirectToFilepath   from '../common/classes/ip-command-with-redirect-to-filepath';
import IpCommandWithReturnedData         from '../common/classes/ip-command-with-returned-data';
import IpCommand                         from '../common/classes/ip.command';
import { EmptySchema, SchemaIds }        from '../common/constants/schemas';

import {
  GlobalOptionsWithRequiredFilePath,
  GlobalOptions, EmptyOptions
} from '../common/interfaces/common';

import { AddressAddOptions }               from './address/add.interfaces';
import { AddressAddSchema }                from './address/add.schema';
import { AddressDeleteOptions }            from './address/delete.interfaces';
import { AddressDeleteSchema }             from './address/delete.schema';
import { AddressFlushOptions }             from './address/flush.interfaces';
import { AddressFlushSchema }              from './address/flush.schema';
import { AddressInfo, AddressShowOptions } from './address/show.interfaces';
import { AddressShowSchema }               from './address/show.schema';

import IpCommandWithRedirectFromFilepathAndReturnedData from '../common/classes/ip-command-with-redirect-from-filepath-and-returned-data';

/**
 * Add new protocol address.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function add(options: AddressAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<IpCommand<AddressAddOptions>> {

  const cmd = [ 'ip', 'address', 'add' ];

  const ipCmd = new IpCommand<AddressAddOptions>(
    SchemaIds.AddressAdd,
    AddressAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Change protocol address.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function change(options: AddressAddOptions,
                             globalOptions: GlobalOptions = {}): Promise<IpCommand<AddressAddOptions>> {

  const cmd = [ 'ip', 'address', 'change' ];

  const ipCmd = new IpCommand<AddressAddOptions>(
    SchemaIds.AddressAdd,
    AddressAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Replace protocol address.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function replace(options: AddressAddOptions,
                              globalOptions: GlobalOptions = {}): Promise<IpCommand<AddressAddOptions>> {

  const cmd = [ 'ip', 'address', 'replace' ];

  const ipCmd = new IpCommand<AddressAddOptions>(
    SchemaIds.AddressAdd,
    AddressAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Delete an address.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function del(options: AddressDeleteOptions,
                          globalOptions: GlobalOptions = {}): Promise<IpCommand<AddressDeleteOptions>> {

  const cmd = [ 'ip', 'address', 'delete' ];

  const ipCmd = new IpCommand<AddressDeleteOptions>(
    SchemaIds.AddressDelete,
    AddressDeleteSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Flush protocol addresses.
 *
 * This command flushes the protocol addresses selected by some criteria.
 *
 * This command has the same arguments as show except that type and master selectors are not supported.
 * Another difference is that it does not run when no arguments are given.
 *
 * Warning: This command and other flush commands are unforgiving.
 * They will cruelly purge all the addresses.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function flush(options: AddressFlushOptions,
                            globalOptions: GlobalOptions = {}): Promise<IpCommand<AddressFlushOptions>> {

  const cmd = [ 'ip', 'address', 'flush' ];

  const ipCmd = new IpCommand<AddressFlushOptions>(
    SchemaIds.AddressFlush,
    AddressFlushSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Save address configuration into a file.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function save(options: AddressFlushOptions,
                           globalOptions: GlobalOptionsWithRequiredFilePath): Promise<IpCommand<AddressFlushOptions>> {

  const cmd = [ 'ip', 'address', 'save' ];

  const ipCmd = new IpCommandWithRedirectToFilepath<AddressFlushOptions>(
    SchemaIds.AddressFlush,
    AddressFlushSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Restore address configuration from a file previously generated by {@link save}.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function restore(options: EmptyOptions = {},
                              globalOptions: GlobalOptionsWithRequiredFilePath): Promise<IpCommand<EmptyOptions>> {

  const cmd = [ 'ip', 'address', 'restore' ];

  const ipCmd = new IpCommandWithRedirectFromFilepath<EmptyOptions>(
    SchemaIds.Empty,
    EmptySchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Show address configuration from a file previously generated by {@link save}.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function showdump(options: EmptyOptions = {},
                               globalOptions: GlobalOptionsWithRequiredFilePath): Promise<IpCommand<EmptyOptions> | AddressInfo[]> {

  const cmd = [ 'ip', 'address', 'showdump' ];

  const ipCmd = new IpCommandWithRedirectFromFilepathAndReturnedData<EmptyOptions>(
    SchemaIds.Empty,
    EmptySchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec<AddressInfo[]>();
}

/**
 * Look at protocol addresses.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function show(options: AddressShowOptions,
                           globalOptions: GlobalOptions = {}): Promise<IpCommand<AddressShowOptions> | AddressInfo[]> {

  const cmd = [ 'ip', 'address', 'show' ];

  const ipCmd = new IpCommandWithReturnedData<AddressShowOptions>(
    SchemaIds.AddressShow,
    AddressShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details':    true,
      '-statistics': true,
      '-json':       true
    },
    cmd);

  return await ipCmd.exec<AddressInfo[]>();
}

export default {
  add,
  change,
  replace,
  del,
  flush,
  save,
  restore,
  showdump,
  show
};