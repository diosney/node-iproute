import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NeighbourAddOptions } from '../../../../src';
import { NudStates } from '../../../../src/commands/neighbour.constants';

export const Tests: TestFixture<NeighbourAddOptions>[] = [
  {
    description      : 'simple ARP entry',
    options          : {
      to    : '192.168.1.100',
      lladdr: '00:aa:bb:cc:dd:ee',
      dev   : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'add',
      'to',
      '192.168.1.100',
      'lladdr',
      '00:aa:bb:cc:dd:ee',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour add to 192.168.1.100 lladdr 00:aa:bb:cc:dd:ee dev eth0`
  },
  {
    description      : 'permanent ARP entry',
    options          : {
      to    : '192.168.1.101',
      lladdr: '00:aa:bb:cc:dd:ef',
      dev   : 'eth0',
      nud   : NudStates.Permanent
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'add',
      'to',
      '192.168.1.101',
      'lladdr',
      '00:aa:bb:cc:dd:ef',
      'nud',
      NudStates.Permanent,
      'dev',
      'eth0',
    ],
    expectedCmdToExec: ` ip neighbour add to 192.168.1.101 lladdr 00:aa:bb:cc:dd:ef nud ${ NudStates.Permanent } dev eth0`
  },
  {
    description      : 'proxy NDP Entry for IPv6',
    options          : {
      to    : '2001:0db8::3',
      lladdr: '00:aa:bb:cc:ee:fd',
      dev   : 'eth0',
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'add',
      'to',
      '2001:0db8::3',
      'lladdr',
      '00:aa:bb:cc:ee:fd',
      'dev',
      'eth0',
    ],
    expectedCmdToExec: ` ip neighbour add to 2001:0db8::3 lladdr 00:aa:bb:cc:ee:fd dev eth0`
  }
];

export default Tests;