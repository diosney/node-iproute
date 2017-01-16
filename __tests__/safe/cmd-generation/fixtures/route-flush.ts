import { RouteRoutingTables } from '../../../../src/commands/route/show.constants';
import { RouteShowOptions }   from '../../../../src/commands/route/show.interfaces';
import { TestFixture }        from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<RouteShowOptions>[] = [
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
      'flush'
    ],
    expectedCmdToExec: ` ip -details -statistics -json route flush`
  },
  {
    description      : 'with `table = cache`',
    options          : {
      table: RouteRoutingTables.Cache
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'route',
      'flush',
      'table',
      RouteRoutingTables.Cache
    ],
    expectedCmdToExec: ` ip -details -statistics -json route flush table ${RouteRoutingTables.Cache}`
  }
];

export default Tests;