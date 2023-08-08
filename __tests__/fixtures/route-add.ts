import { RouteAddOptions } from '../../lib/commands/route/add.interfaces';
import { TestFixture }     from '../../src/common/interfaces/tests';

export const Tests: TestFixture<RouteAddOptions>[] = [
  {
    description      : 'with `local` and `dev`',
    options          : {
      to_arg: 'default',
      via   : {
        address: '192.168.1.1'
      },
      dev   : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'route',
      'add',
      'local',
      '2001:0db8:85a3::0370:7334/64',
      'dev',
      'eth1'
    ],
    expectedCmdToExec: ` ip route add default via 192.168.1.1 dev eth0`
  }
];

export default Tests;