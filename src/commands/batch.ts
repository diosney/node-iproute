import CommandWithFilepath from '../common/classes/command-with-filepath';
import Command from '../common/classes/command';
import CommandWithStdin from '../common/classes/command-with-stdin';

import { EmptySchema, SchemaIds, StdinGlobalOptionSchema } from '../common/constants/schemas';

import {
  Empty,
  GlobalOptionsWithRequiredFilePath,
  GlobalOptionsWithRequiredStdin
} from '../common/interfaces/common';

/**
 * Read commands from provided file and invoke them.
 * First failure will cause termination of `ip`.
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
 * import { batch } from 'iproute';
 * ```
 *
 * Executes batch commands from a file
 * ```
 * await batch.fromFile({
 *   filePath: '/tmp/filepath'
 * });
 * ```
 */
export async function fromFile(globalOptions: GlobalOptionsWithRequiredFilePath): Promise<Command<Empty>> {
  const cmd = ['ip', '-batch'];

  const ipCmd = new CommandWithFilepath<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Read commands from standard input and invoke them.
 * First failure will cause termination of `ip`.
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
 * import { batch } from 'iproute';
 * ```
 *
 * Executes batch commands from stdin
 * ```
 * await batch.fromStdin({
 *   stdin: [
 *     'address add local 127.0.1.4/32 dev lo',
 *     'address add local 127.0.1.5/32 dev lo',
 *     'address add local 127.0.1.6/32 dev lo',
 *     'address add local 127.0.1.7/32 dev lo'
 *   ].join('\n')
 * });
 * ```
 */
export async function fromStdin(globalOptions: GlobalOptionsWithRequiredStdin): Promise<Command<Empty>> {
  const cmd = ['ip', '-batch'];

  const ipCmd = new CommandWithStdin<Empty>(
    SchemaIds.Empty,
    EmptySchema,
    {},
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

export default {
  fromFile,
  fromStdin
};