import { LinkSetOptions } from '../../../../src/commands/link/set.interfaces';
import { TestFixture } from '../../../../src/common/interfaces/tests';
import { XdpOptionTypes } from '../../../../src';

export const Tests: TestFixture<LinkSetOptions>[] = [
  {
    description: 'with several options set (1)',
    options: {
      dev_: 'ppp0',
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
      dev_: 'eth0',
      xdp: {
        [XdpOptionTypes.Object]: {
          file_: 'prog.o'
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
    expectedCmdToExec: ` ip link set eth0 xdp ${ XdpOptionTypes.Object } prog.o`
  },
  {
    description: 'with several options set (2)',
    options: {
      dev_: 'eth0',
      xdp: {
        [XdpOptionTypes.Object]: {
          file_: 'prog.o',
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
    expectedCmdToExec: ` ip link set eth0 xdp ${ XdpOptionTypes.Object } prog.o section foo`
  },
  {
    description: 'with several options set (2)',
    options: {
      dev_: 'eth0',
      xdp: {
        [XdpOptionTypes.Pinned]:{
          file_:'/sys/fs/bpf/foo'
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
  }
];

export default Tests;