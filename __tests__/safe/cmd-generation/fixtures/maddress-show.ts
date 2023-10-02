import { TestFixture } from '../../../../src/common/interfaces/tests';
import { MaddressShowOptions } from '../../../../src';

export const Tests: TestFixture<MaddressShowOptions>[] = [
  {
    description      : 'show multicast addresses with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      'maddress',
      'show'
    ],
    expectedCmdToExec: `ip maddress show`
  },
  {
    description      : 'show multicast addresses for interface `eth0`',
    options          : {
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'maddress',
      'show',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: `ip maddress show dev eth0`
  }
];

export default Tests;