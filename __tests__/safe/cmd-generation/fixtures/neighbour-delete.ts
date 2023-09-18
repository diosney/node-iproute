import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NeighbourDelOptions } from '../../../../src';

export const Tests: TestFixture<NeighbourDelOptions>[] = [
  {
    description      : 'ARP entry',
    options          : {
      to : '192.168.1.100',
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'del',
      'to',
      '192.168.1.100',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour del to 192.168.1.100 dev eth0`
  },
  {
    description      : 'proxy ARP entry',
    options          : {
      to   : '192.168.1.100',
      dev  : 'eth0',
      proxy: true
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'del',
      'to',
      '192.168.1.100',
      'proxy',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour del to 192.168.1.100 proxy dev eth0`
  }
];

export default Tests;