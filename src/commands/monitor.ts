import MonitorCommand     from '../common/classes/monitor-command';
import { SchemaIds }      from '../common/constants/schemas';
import { GlobalOptions }  from '../common/interfaces/common';
import { MonitorOptions } from './monitor/monitor.interfaces';
import { MonitorSchema }  from './monitor/monitor.schema';

/**
 * State monitoring.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function monitor(options: MonitorOptions,
                              globalOptions: GlobalOptions = {}): Promise<MonitorCommand<MonitorOptions>> {

  const cmd = [ 'ip', 'monitor' ];

  const ipCmd = new MonitorCommand<MonitorOptions>(
    SchemaIds.Monitor,
    MonitorSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

export default monitor;