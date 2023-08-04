import { LinkSetOptions } from '../../src/modules/link/models/set.interfaces';
import { TestFixture }    from '../../src/common/interfaces/tests';

export const Tests: TestFixture<LinkSetOptions>[] = [
  {
    description      : 'with several options set (1)',
    options          : {
      dev: 'ppp0',
      mtu: 1400
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'set',
      'dev',
      'ppp0',
      'mtu',
      1400
    ],
    expectedCmdToExec: ` ip link set dev ppp0 mtu 1400`
  },
  {
    description      : 'with several options set (2)',
    options          : {
      dev: 'eth0',
      xdp: true,
      obj: 'prog.o'
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'set',
      'dev',
      'eth0',
      'xdp',
      'obj',
      'prog.o'
    ],
    expectedCmdToExec: ` ip link set dev eth0 xdp obj prog.o`
  },
  {
    description      : 'with several options set (2)',
    options          : {
      dev: 'eth0',
      xdp: true,
      obj: 'prog.o',
      sec: 'foo'
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'set',
      'dev',
      'eth0',
      'xdp',
      'obj',
      'prog.o',
      'sec',
      'foo'
    ],
    expectedCmdToExec: ` ip link set dev eth0 xdp obj prog.o sec foo`
  },
  {
    description      : 'with several options set (2)',
    options          : {
      dev   : 'eth0',
      xdp   : true,
      obj   : 'prog.o',
      pinned: '/sys/fs/bpf/foo'
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'set',
      'dev',
      'eth0',
      'xdp',
      'obj',
      'prog.o',
      'pinned',
      '/sys/fs/bpf/foo'
    ],
    expectedCmdToExec: ` ip link set dev eth0 xdp obj prog.o pinned /sys/fs/bpf/foo`
  }
];

export default Tests;