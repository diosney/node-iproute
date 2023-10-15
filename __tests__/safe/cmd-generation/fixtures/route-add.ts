import { RouteAddOptions } from '../../../../src/commands/route/add.interfaces';
import { TestFixture } from '../../../../src/common/interfaces/tests';
import { EncapSeg6LocalActions } from '../../../../src/commands/route.constants';

export const Tests: TestFixture<RouteAddOptions>[] = [
  {
    description: 'with `to` `via` and `dev`',
    options: {
      to: 'default',
      via: {
        address: '192.168.1.1'
      },
      dev: 'eth0'
    },
    expectedCmd: [
      '',
      'ip',
      'route',
      'add',
      'default',
      'via',
      '192.168.1.1',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip route add default via 192.168.1.1 dev eth0`
  },
  {
    description: 'with `to`, `encap mpls`, `via` and `dev`',
    options: {
      to: '10.1.1.0/30',
      encap: {
        mpls: {
          label: '200/300'
        }
      },
      via: {
        address: '10.1.1.1'
      },
      dev: 'eth0'
    },
    expectedCmd: [
      '',
      'ip',
      'route',
      'add',
      '10.1.1.0/30',
      'encap',
      'mpls',
      '200/300',
      'via',
      '10.1.1.1',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip route add 10.1.1.0/30 encap mpls 200/300 via 10.1.1.1 dev eth0`
  },
  {
    description: 'with `to`, `encap seg6` and `dev`',
    options: {
      to: '2001:db8:1::/64',
      encap: {
        seg6: {
          mode: true,
          encap: true,
          segs: '2001:db8:42::1,2001:db8:ffff::2'
        }
      },
      dev: 'eth0'
    },
    expectedCmd: [
      '',
      'ip',
      'route',
      'add',
      '2001:db8:1::/64',
      'encap',
      'seg6',
      'mode',
      'encap',
      'segs',
      '2001:db8:42::1,2001:db8:ffff::2',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip route add 2001:db8:1::/64 encap seg6 mode encap segs 2001:db8:42::1,2001:db8:ffff::2 dev eth0`
  },
  {
    description: 'with `to`, `encap seg6local` and `dev`',
    options: {
      to: '2001:db8:1::/64',
      encap: {
        seg6local: {
          action: {
            [EncapSeg6LocalActions.EndDT46]: {
              vrftable: 100
            }
          }
        }
      },
      dev: 'vrf100'
    },
    expectedCmd: [
      '',
      'ip',
      'route',
      'add',
      '2001:db8:1::/64',
      'encap',
      'seg6local',
      'action',
      EncapSeg6LocalActions.EndDT46,
      'vrftable',
      100,
      'dev',
      'vrf100'
    ],
    expectedCmdToExec: ` ip route add 2001:db8:1::/64 encap seg6local action End.DT46 vrftable 100 dev vrf100`
  },
  {
    description: 'with `to`, `encap ioam6` and `dev`',
    options: {
      to: '2001:db8:1::/64',
      encap: {
        ioam6: {
          trace: true,
          prealloc: true,
          type: 0x800000,
          ns: 1,
          size: 12
        }
      },
      dev: 'eth0'
    },
    expectedCmd: [
      '',
      'ip',
      'route',
      'add',
      '2001:db8:1::/64',
      'encap',
      'ioam6',
      'trace',
      'prealloc',
      'type',
      0x800000,
      'ns',
      1,
      'size',
      12,
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip route add 2001:db8:1::/64 encap ioam6 trace prealloc type 8388608 ns 1 size 12 dev eth0`
  }
];

export default Tests;