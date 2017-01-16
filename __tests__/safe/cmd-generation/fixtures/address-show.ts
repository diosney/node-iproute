import { AddressShowOptions } from '../../../../src/commands/address/show.interfaces';
import { TestFixture }        from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<AddressShowOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'address',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json address show`
  },
  {
    description      : 'for all active interfaces',
    options          : {
      up: true
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'address',
      'show',
      'up'
    ],
    expectedCmdToExec: ` ip -details -statistics -json address show up`
  },
  {
    description      : 'shows IPv4 and IPv6 addresses assigned to network interface `eth0`',
    options          : {
      dev: 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'address',
      'show',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip -details -statistics -json address show dev eth0`
  }
];

export default Tests;