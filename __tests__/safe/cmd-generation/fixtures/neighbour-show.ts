import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NeighbourShowOptions } from '../../../../src';
import { NudStates } from '../../../../src/commands/neighbour.constants';

export const Tests: TestFixture<NeighbourShowOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'neighbour',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json neighbour show`
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
      'neighbour',
      'show',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json neighbour show dev eth0`
  },
  {
    description      : 'show stale ARP entries',
    options          : {
      nud: NudStates.Stale
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'neighbour',
      'show',
      'nud',
      NudStates.Stale
    ],
    expectedCmdToExec: ` ip -details -statistics -json neighbour show nud ${ NudStates.Stale }`
  },
  {
    description      : 'for a specific IP and interface',
    options          : {
      to : '192.168.1.100',
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'neighbour',
      'show',
      'to',
      '192.168.1.100',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json neighbour show to 192.168.1.100 dev eth0`
  }
];

export default Tests;