import CommandWithRedirectFromFilepath from '../common/classes/command-with-redirect-from-filepath';
import CommandWithRedirectToFilepath   from '../common/classes/command-with-redirect-to-filepath';
import CommandWithReturnedData         from '../common/classes/command-with-returned-data';
import Command                         from '../common/classes/command';
import { EmptySchema, SchemaIds }      from '../common/constants/schemas';

import {
  GlobalOptionsWithRequiredFilePath,
  GlobalOptions, Empty
} from '../common/interfaces/common';

import { AddressAddOptions }    from './address/add.interfaces';
import { AddressAddSchema }     from './address/add.schema';
import { AddressDeleteOptions } from './address/delete.interfaces';
import { AddressDeleteSchema }  from './address/delete.schema';
import { AddressFlushOptions }  from './address/flush.interfaces';
import { AddressFlushSchema }   from './address/flush.schema';

import {
  LinkWithAddressInfo,
  AddressShowOptions,
  OnlyAddressInfo
} from './address/show.interfaces';

import { AddressShowSchema } from './address/show.schema';
import CommandWithRedirectFromFilepathAndReturnedData from '../common/classes/command-with-redirect-from-filepath-and-returned-data';

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
                          globalOptions: GlobalOptions = {}): Promise<Command<AddressAddOptions>> {

  const cmd = [ 'ip', 'address', 'add' ];

  const ipCmd = new Command<AddressAddOptions>(
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
                             globalOptions: GlobalOptions = {}): Promise<Command<AddressAddOptions>> {

  const cmd = [ 'ip', 'address', 'change' ];

  const ipCmd = new Command<AddressAddOptions>(
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
                              globalOptions: GlobalOptions = {}): Promise<Command<AddressAddOptions>> {

  const cmd = [ 'ip', 'address', 'replace' ];

  const ipCmd = new Command<AddressAddOptions>(
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
                          globalOptions: GlobalOptions = {}): Promise<Command<AddressDeleteOptions>> {

  const cmd = [ 'ip', 'address', 'delete' ];

  const ipCmd = new Command<AddressDeleteOptions>(
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
                            globalOptions: GlobalOptions = {}): Promise<Command<AddressFlushOptions>> {

  const cmd = [ 'ip', 'address', 'flush' ];

  const ipCmd = new Command<AddressFlushOptions>(
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
                           globalOptions: GlobalOptionsWithRequiredFilePath): Promise<Command<AddressFlushOptions>> {

  const cmd = [ 'ip', 'address', 'save' ];

  const ipCmd = new CommandWithRedirectToFilepath<AddressFlushOptions>(
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
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function restore(globalOptions: GlobalOptionsWithRequiredFilePath): Promise<Command<Empty>> {
  const cmd = [ 'ip', 'address', 'restore' ];

  const ipCmd = new CommandWithRedirectFromFilepath<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Show address configuration from a file previously generated by {@link save}.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function showdump(globalOptions: GlobalOptionsWithRequiredFilePath): Promise<Command<Empty> | OnlyAddressInfo[]> {
  const cmd = [ 'ip', 'address', 'showdump' ];

  const ipCmd = new CommandWithRedirectFromFilepathAndReturnedData<Empty>(
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

  return await ipCmd.exec<OnlyAddressInfo[]>();
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
export async function show(options: AddressShowOptions  = {},
                           globalOptions: GlobalOptions = {}): Promise<Command<AddressShowOptions> | LinkWithAddressInfo[]> {

  const cmd = [ 'ip', 'address', 'show' ];

  const ipCmd = new CommandWithReturnedData<AddressShowOptions>(
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

  return await ipCmd.exec<LinkWithAddressInfo[]>();
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