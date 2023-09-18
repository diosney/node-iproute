import { TestFixture } from '../../../../src/common/interfaces/tests';
import { Empty } from '../../../../src';  // Assuming there's a suitable type for show

export const Tests: TestFixture<Empty>[] = [
  {
    description      : 'show all tunnels',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'tunnel',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json tunnel show`
  }
];

export default Tests;
