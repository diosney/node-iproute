import { RouteRoutingTables } from '../../src/commands/route/show.constants';
import { RouteShowOptions }   from '../../src/commands/route/show.interfaces';
import { TestFixture }        from '../../src/common/interfaces/tests';

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
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json route show`
  },
  {
    description      : 'with `table = main`',
    options          : {
      table: RouteRoutingTables.Main
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'route',
      'show',
      'table',
      RouteRoutingTables.Main
    ],
    expectedCmdToExec: ` ip -details -statistics -json route show table ${RouteRoutingTables.Main}`
  }
];

export default Tests;