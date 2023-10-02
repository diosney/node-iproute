import { TestFixture } from '../../../../src/common/interfaces/tests';
import { MaddressShowOptions } from '../../../../src';

export const Tests: TestFixture<MaddressShowOptions>[] = [
  {
    description      : 'show multicast addresses with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'maddress',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json maddress show`
  },
  {
    description      : 'show multicast addresses for interface `eth0`',
    options          : {
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'maddress',
      'show',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json maddress show dev eth0`
  }
];

export default Tests;