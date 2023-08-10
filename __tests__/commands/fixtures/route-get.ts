import { RouteGetOptions } from '../../../src/commands/route/get.interfaces';
import { TestFixture }     from '../../../src/common/interfaces/tests';

export const Tests: TestFixture<RouteGetOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'route',
      'get'
    ],
    expectedCmdToExec: ` ip -details -statistics -json route get`
  },
  {
    description      : 'with `to = 8.8.8.8`',
    options          : {
      to: '8.8.8.8'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'route',
      'get',
      'to',
      '8.8.8.8'
    ],
    expectedCmdToExec: ` ip -details -statistics -json route get to 8.8.8.8`
  }
];

export default Tests;