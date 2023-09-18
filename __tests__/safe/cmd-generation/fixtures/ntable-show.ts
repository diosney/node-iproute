import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NtableShowOptions } from '../../../../src';

export const Tests: TestFixture<NtableShowOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'ntable',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json ntable show`
  },
  {
    description      : 'for a specific interface',
    options          : {
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'ntable',
      'show',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json ntable show dev eth0`
  }
];

export default Tests;