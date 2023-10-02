import { TestFixture } from '../../../../src/common/interfaces/tests';
import { MaddressAddOptions } from '../../../../src';

export const Tests: TestFixture<MaddressAddOptions>[] = [
  {
    description      : 'delete multicast address `33:33:00:00:00:01` from interface `eth0`',
    options          : {
      address_: '33:33:00:00:00:01',
      dev     : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'maddress',
      'del',
      '33:33:00:00:00:01',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: `ip maddress del 33:33:00:00:00:01 dev eth0`
  }
];

export default Tests;
