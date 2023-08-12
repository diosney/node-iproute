import { RuleAddOptions } from '../../../src/commands/rule/add.interfaces';
import { TestFixture }    from '../../../src/common/interfaces/tests';

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
      'delete',
      'from',
      '192.168.1.10',
      'table',
      100
    ],
    expectedCmdToExec: ` ip rule delete from 192.168.1.10 table 100`
  }
];

export default Tests;