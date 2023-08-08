import { RuleAddOptions } from '../../src/commands/rule/add.interfaces';
import { TestFixture }    from '../../src/common/interfaces/tests';

export const Tests: TestFixture<RuleAddOptions>[] = [
  {
    description      : 'with `from` and `table`',
    options          : {
      from : '192.168.1.10',
      table: 100
    },
    expectedCmd      : [
      '',
      'ip',
      'rule',
      'add',
      'from',
      '192.168.1.10',
      'table',
      100
    ],
    expectedCmdToExec: ` ip rule add from 192.168.1.10 table 100`
  },
  {
    description      : 'with `fwmark` and `table`',
    options          : {
      fwmark: '0x1',
      table : 200
    },
    expectedCmd      : [
      '',
      'ip',
      'rule',
      'add',
      'fwmark',
      '0x1',
      'table',
      200
    ],
    expectedCmdToExec: ` ip rule add fwmark 0x1 table 200`
  },
  {
    description      : 'with `tos`, `priority` and `table`',
    options          : {
      tos     : 10,
      priority: 3000,
      table   : 300
    },
    expectedCmd      : [
      '',
      'ip',
      'rule',
      'add',
      'tos',
      10,
      'priority',
      3000,
      'table',
      300
    ],
    expectedCmdToExec: ` ip rule add tos 10 priority 3000 table 300`
  }
];

export default Tests;