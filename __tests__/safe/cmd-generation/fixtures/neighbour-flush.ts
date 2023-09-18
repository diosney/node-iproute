import { TestFixture } from '../../../../src/common/interfaces/tests';
import { NeighbourShowOptions } from '../../../../src';
import { NudStates } from '../../../../src/commands/neighbour.constants';

export const Tests: TestFixture<NeighbourShowOptions>[] = [
  {
    description      : 'ARP entries for a specific interface',
    options          : {
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'flush',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip neighbour flush dev eth0`
  },
  {
    description      : 'stale ARP entries',
    options          : {
      nud: NudStates.Stale
    },
    expectedCmd      : [
      '',
      'ip',
      'neighbour',
      'flush',
      'nud',
      NudStates.Stale
    ],
    expectedCmdToExec: ` ip neighbour flush nud ${ NudStates.Stale }`
  }
];

export default Tests;