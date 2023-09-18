import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NtableChangeOptions } from '../../../../src/commands/ntable/change.interfaces';

export const Tests: TestFixture<NtableChangeOptions>[] = [
  {
    description      : 'for a specific interface',
    options          : {
      name : 'arp_cache',
      dev  : 'eth0',
      queue: 8
    },
    expectedCmd      : [
      '',
      'ip',
      'ntable',
      'change',
      'name',
      'arp_cache',
      'dev',
      'eth0',
      'queue',
      8
    ],
    expectedCmdToExec: ` ip ntable change name arp_cache dev eth0 queue 8`
  }
];

export default Tests;