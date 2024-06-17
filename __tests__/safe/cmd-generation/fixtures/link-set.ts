import { LinkSetOptions } from '../../../../src/commands/link/set.interfaces';
import { TestFixture } from '../../../../src/common/interfaces/tests';
import { XdpOptionTypes } from '../../../../src';
import { LinkTypes } from '../../../../src/commands/link.constants';

export const Tests: TestFixture<LinkSetOptions>[] = [
  {
    description: 'with several options set (1)',
    options: {
      dev: 'ppp0',
      mtu: 1400
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'set',
      'ppp0',
      'mtu',
      1400
    ],
    expectedCmdToExec: ` ip link set ppp0 mtu 1400`
  },
  {
    description: 'with several options set (2)',
    options: {
      dev: 'eth0',
      xdp: {
        [XdpOptionTypes.Object]: {
          file: 'prog.o'
        }
      }
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'set',
      'eth0',
      'xdp',
      XdpOptionTypes.Object,
      'prog.o'
    ],
    expectedCmdToExec: ` ip link set eth0 xdp ${XdpOptionTypes.Object} prog.o`
  },
  {
    description: 'with several options set (2)',
    options: {
      dev: 'eth0',
      xdp: {
        [XdpOptionTypes.Object]: {
          file: 'prog.o',
          section: 'foo'
        }
      }
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'set',
      'eth0',
      'xdp',
      XdpOptionTypes.Object,
      'prog.o',
      'section',
      'foo'
    ],
    expectedCmdToExec: ` ip link set eth0 xdp ${XdpOptionTypes.Object} prog.o section foo`
  },
  {
    description: 'with several options set (2)',
    options: {
      dev: 'eth0',
      xdp: {
        [XdpOptionTypes.Pinned]: {
          file: '/sys/fs/bpf/foo'
        }
      }
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'set',
      'eth0',
      'xdp',
      XdpOptionTypes.Pinned,
      '/sys/fs/bpf/foo'
    ],
    expectedCmdToExec: ` ip link set eth0 xdp ${XdpOptionTypes.Pinned} /sys/fs/bpf/foo`
  },
  {
    description: 'with type can and bitrate',
    options: {
      dev: 'can0',
      type: {
        [LinkTypes.Can]: {
          bitrate: 500000
        }
      }
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'set',
      'can0',
      'type',
      'can',
      'bitrate',
      500000
    ],
    expectedCmdToExec: ` ip link set can0 type can bitrate 500000`
  }
];

export default Tests;