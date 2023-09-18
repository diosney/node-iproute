import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NeighbourAddOptions } from '../../../../src';

export const Tests: TestFixture<NeighbourAddOptions>[] = [
  {
    description      : 'MAC address of an ARP entry',
    options          : {
      to    : '192.168.1.100',
      lladdr: '11:22:33:44:55:66',
      dev   : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'change',
      'to',
      '192.168.1.100',
      'lladdr',
      '11:22:33:44:55:66',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour change to 192.168.1.100 lladdr 11:22:33:44:55:66 dev eth0`
  },
  {
    description      : 'MAC address of a proxy ARP entry',
    options          : {
      to    : '192.168.1.102',
      lladdr: '11:22:33:44:55:68',
      dev   : 'eth0',
      proxy : true
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'change',
      'to',
      '192.168.1.102',
      'lladdr',
      '11:22:33:44:55:68',
      'proxy',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour change to 192.168.1.102 lladdr 11:22:33:44:55:68 proxy dev eth0`
  },
  {
    description      : 'MAC address of an NDP entry with IPv6',
    options          : {
      to    : '2001:0db8::1',
      lladdr: '11:22:33:44:55:69',
      dev   : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'change',
      'to',
      '2001:0db8::1',
      'lladdr',
      '11:22:33:44:55:69',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour change to 2001:0db8::1 lladdr 11:22:33:44:55:69 dev eth0`
  }
];

export default Tests;