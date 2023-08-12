import { promisify } from 'util';
import { exec }      from 'child_process';

import { SysctlActions, SysctlPaths }     from './ip-forward.constants';
import { CommandError }                   from '../common/errors/command';
import { GlobalOptions }                  from '../common/interfaces/common';
import { GlobalOptionsSchema, SchemaIds } from '../common/constants/schemas';
import { validate }                       from '../common/misc';

const promisifiedExec = promisify(exec);

// TODO: Convert this to `Command` class?
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

export const v4 = {
  path:    SysctlPaths.Ipv4Forwarding,
  enable:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv4Forwarding, SysctlActions.Enable, globalOptions),
  disable: (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv4Forwarding, SysctlActions.Disable, globalOptions),
  status:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv4Forwarding, SysctlActions.Status, globalOptions)
};

export const v6 = {
  path:    SysctlPaths.Ipv6Forwarding,
  enable:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv6Forwarding, SysctlActions.Enable, globalOptions),
  disable: (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv6Forwarding, SysctlActions.Disable, globalOptions),
  status:  (globalOptions: GlobalOptions = {}) => sysctl(SysctlPaths.Ipv6Forwarding, SysctlActions.Status, globalOptions)
};

export default {
  v4,
  v6,
  enable:  async (globalOptions: GlobalOptions = {}) => {
    await Promise.all([ v4.enable(globalOptions), v6.enable(globalOptions) ]);
  },
  disable: async (globalOptions: GlobalOptions = {}) => {
    await Promise.all([ v4.disable(globalOptions), v6.disable(globalOptions) ]);
  },
  status:  async (globalOptions: GlobalOptions = {}): Promise<{ v4: string; v6: string }> => {
    const results = await Promise.all([ v4.status(globalOptions), v6.status(globalOptions) ]);
    return {
      v4: results[0]?.split('\n')[0] || '',
      v6: results[1]?.split('\n')[0] || ''
    };
  }
};
