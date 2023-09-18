import { AddrlabelAddOptions } from '../../../../src/commands/addrlabel/add.interfaces';
import { TestFixture } from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<AddrlabelAddOptions>[] = [
  {
    description:       'with `prefix` and `label`',
    options:           {
      prefix: '2001:db8::/32',
      label:  100
    },
    expectedCmd:       [
      '',
      'ip',
      'addrlabel',
      'add',
      'prefix',
      '2001:db8::/32',
      'label',
      100
    ],
    expectedCmdToExec: ` ip addrlabel add prefix 2001:db8::/32 label 100`
  }
];

export default Tests;