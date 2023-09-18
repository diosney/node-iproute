import { TestFixture } from '../../../../src/common/interfaces/tests';
import { Empty } from '../../../../src';

export const Tests: TestFixture<Empty>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'addrlabel',
      'list'
    ],
    expectedCmdToExec: ` ip -details -statistics -json addrlabel list`
  }
];

export default Tests;