import { AddrlabelDelOptions } from '../../../../src/commands/addrlabel/del.interfaces';
import { TestFixture } from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<AddrlabelDelOptions>[] = [
  {
    description      : 'with `prefix`',
    options          : {
      prefix: '2001:db8::/32'
    },
    expectedCmd      : [
      '',
      'ip',
      'addrlabel',
      'del',
      'prefix',
      '2001:db8::/32'
    ],
    expectedCmdToExec: ` ip addrlabel del prefix 2001:db8::/32`
  }
];

export default Tests;