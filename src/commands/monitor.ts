import MonitorCommand from '../common/classes/monitor-command';
import { SchemaIds } from '../common/constants/schemas';
import { GlobalOptions } from '../common/interfaces/common';
import { MonitorOptions } from './monitor/monitor.interfaces';
import { MonitorSchema } from './monitor/monitor.schema';

/**
 * State monitoring.
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
 * import { monitor } from 'iproute';
 * ```
 *
 * Monitor all objects state changes
 * ```
 * monitor({
 *   object: MonitorObjects.All
 * });
 * ```
 *
 * After starting the monitor, you can start watching for changes
 * ```
 * let command: MonitorCommand<MonitorOptions>;
 *
 * monitor({
 *   object: MonitorObjects.All
 * })
 * .then((_command) => {
 *   command = _command;
 *
 *   command.on(MonitorObjects.All, (data: MonitorEmittedData) => {
 *     // Do something with `data`.
 *   });
 *
 *   command.on('error', (error) => {
 *     // Do something with `data`.
 *   });
 * });
 *
 * setTimeout(() => {
 *   command.close();
 * }, 5000);
 * ```
 */
export async function monitor(options: MonitorOptions,
                              globalOptions: GlobalOptions = {}): Promise<MonitorCommand<MonitorOptions>> {

  const cmd = ['ip', 'monitor'];

  const ipCmd = new MonitorCommand<MonitorOptions>(
    SchemaIds.Monitor,
    MonitorSchema,
    options,
    {
      ...globalOptions,
      '-tshort' : true,
      '-oneline': true
    },
    cmd);

  return await ipCmd.exec();
}

export default monitor;