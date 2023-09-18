import { Empty }       from '../../../../src/common/interfaces/common';
import { TestFixture } from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<Empty>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      'addrlabel',
      'flush'
    ],
    expectedCmdToExec: ` ip addrlabel flush`
  }
];

export default Tests;