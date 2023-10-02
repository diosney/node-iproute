import { TestFixture } from '../../../../src/common/interfaces/tests';
import { MrouteShowOptions, RouteRoutingTables } from '../../../../src';

export const Tests: TestFixture<MrouteShowOptions>[] = [
  {
    description      : 'show multicast addresses with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'mroute',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json mroute show`
  },
  {
    description      : 'show multicast routes for destination `224.0.0.1/24`',
    options          : {
      to: '224.0.0.1/24'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'mroute',
      'show',
      'to',
      '224.0.0.1/24'
    ],
    expectedCmdToExec: ` ip -details -statistics -json mroute show to 224.0.0.1/24`
  },
  {
    description      : 'show multicast routes for incoming interface `eth0`',
    options          : {
      iif: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'mroute',
      'show',
      'iif',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json mroute show iif eth0`
  },
  {
    description      : 'show multicast routes from source IP `192.168.1.10/24`',
    options          : {
      from : '192.168.1.10/24',
      table: RouteRoutingTables.Local
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'mroute',
      'show',
      'from',
      '192.168.1.10/24',
      'table',
      RouteRoutingTables.Local
    ],
    expectedCmdToExec: ` ip -details -statistics -json mroute show from 192.168.1.10/24 table ${ RouteRoutingTables.Local }`
  }
];

export default Tests;