import {TestFixture} from '../../../../src/common/interfaces/tests';
import {NeighbourGetOptions} from '../../../../src';

export const Tests: TestFixture<NeighbourGetOptions>[] = [
  {
    description      : 'with no params',
    options          : {
      to : '10.0.1.10',
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'neighbour',
      'get',
      'to',
      '10.0.1.10',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json neighbour get to 10.0.1.10 dev eth0`
  },
  {
    description      : 'with proxy enabled',
    options          : {
      proxy: true,
      to   : '10.0.1.10',
      dev  : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'neighbour',
      'get',
      'proxy',
      'to',
      '10.0.1.10',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json neighbour get proxy to 10.0.1.10 dev eth0`
  }
];

export default Tests;