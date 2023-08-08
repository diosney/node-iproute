import { RuleRoutingTables }  from '../../src/commands/rule/add.constants';
import { RuleAddOptions } from '../../src/commands/rule/add.interfaces';
import { TestFixture }    from '../../src/common/interfaces/tests';

export const Tests: TestFixture<RuleAddOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'rule',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json rule show`
  },
  {
    description      : 'with `table = main`',
    options          : {
      table: RuleRoutingTables.Main
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'rule',
      'show',
      'table',
      RuleRoutingTables.Main
    ],
    expectedCmdToExec: ` ip -details -statistics -json rule show table ${RuleRoutingTables.Main}`
  },
  {
    description      : 'shows IPv4 and IPv6 addresses assigned to network interface `eth0`',
    options          : {
      priority: 0
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'rule',
      'show',
      'priority',
      0
    ],
    expectedCmdToExec: ` ip -details -statistics -json rule show priority 0`
  }
];

export default Tests;