import { promisify } from 'util';
import { exec }      from 'child_process';

import { SysctlActions, SysctlPaths }     from './ip-forwarding.constants';
import { CommandError }                   from '../common/errors/command';
import { GlobalOptions }                  from '../common/interfaces/common';
import { GlobalOptionsSchema, SchemaIds } from '../common/constants/schemas';
import { validate }                       from '../common/misc';

const promisifiedExec = promisify(exec);

async function sysctl(path: string,
                      action: SysctlActions,
                      globalOptions: GlobalOptions = {}): Promise<string | null> {

  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  let args: string[] = [ 'sysctl' ];

  if (action === SysctlActions.Enable) {
    args = args.concat('-w', path + '=1');
  }
  else if (action === SysctlActions.Disable) {
    args = args.concat('-w', path + '=0');
  }
  else if (action === SysctlActions.Status) {
    args = args.concat('--values', path);
  }

  let cmdToExec = args.join(' ');

  if (globalOptions.dryRun) {
    return null;
  }

  const { stdout, stderr } = await promisifiedExec(cmdToExec);

  if (stderr) {
    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, cmdToExec);
  }

  if (action === SysctlActions.Status) {
    return stdout;
  }

  return null;
}

/**
 * Enables and checks status of IPv4 forwarding.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.v4.enable();
 * await utils.ipForwarding.v4.disable();
 *
 * const status = await utils.ipForwarding.v4.status();
 * ```
 */
export const v4 = {
  enable:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv4Forwarding, SysctlActions.Enable, globalOptions),
  disable: (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv4Forwarding, SysctlActions.Disable, globalOptions),
  status:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv4Forwarding, SysctlActions.Status, globalOptions)
};

/**
 * Enables and checks status of IPv6 forwarding.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.v6.enable();
 * await utils.ipForwarding.v6.disable();
 *
 * const status = await utils.ipForwarding.v6.status();
 * ```
 */
export const v6 = {
  enable:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv6Forwarding, SysctlActions.Enable, globalOptions),
  disable: (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv6Forwarding, SysctlActions.Disable, globalOptions),
  status:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv6Forwarding, SysctlActions.Status, globalOptions)
};

/**
 * Enables both IPv4 & IPv6 IP forwarding.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.enable();
 * ```
 */
export const enable = async (globalOptions: GlobalOptions = {}) => {
  await Promise.all([ v4.enable(globalOptions), v6.enable(globalOptions) ]);
};

/**
 * Disables both IPv4 & IPv6 IP forwarding.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * await utils.ipForwarding.disable();
 * ```
 */
export const disable = async (globalOptions: GlobalOptions = {}) => {
  await Promise.all([ v4.disable(globalOptions), v6.disable(globalOptions) ]);
};

/**
 * Checks both IPv4 & IPv6 IP forwarding statuses.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @example
 *
 * ```
 * import { utils } from 'iproute';
 *
 * const status = await utils.ipForwarding.status();
 * ```
 */
export const status = async (globalOptions: GlobalOptions = {}): Promise<{ v4: string; v6: string }> => {
  const results = await Promise.all([ v4.status(globalOptions), v6.status(globalOptions) ]);
  return {
    v4: results[0]?.split('\n')[0] || '',
    v6: results[1]?.split('\n')[0] || ''
  };
};

export default {
  v4,
  v6,
  enable,
  disable,
  status
};
