import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NeighbourAddOptions } from '../../../../src';
import { NudStates } from '../../../../src/commands/neighbour.constants';

export const Tests: TestFixture<NeighbourAddOptions>[] = [
  {
    description      : 'replace or add ARP entry with a MAC address',
    options          : {
      to    : '192.168.1.100',
      lladdr: '11:22:33:44:55:66',
      dev   : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'replace',
      'to',
      '192.168.1.100',
      'lladdr',
      '11:22:33:44:55:66',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour replace to 192.168.1.100 lladdr 11:22:33:44:55:66 dev eth0`
  },
  {
    description      : 'replace or add ARP entry and set to permanent',
    options          : {
      to    : '192.168.1.102',
      lladdr: '11:22:33:44:55:68',
      dev   : 'eth0',
      nud: NudStates.Permanent
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'replace',
      'to',
      '192.168.1.102',
      'lladdr',
      '11:22:33:44:55:68',
      'nud',
      NudStates.Permanent,
      'dev',
      'eth0',
    ],
    expectedCmdToExec: ` ip neighbour replace to 192.168.1.102 lladdr 11:22:33:44:55:68 nud ${NudStates.Permanent} dev eth0`
  }
];

export default Tests;