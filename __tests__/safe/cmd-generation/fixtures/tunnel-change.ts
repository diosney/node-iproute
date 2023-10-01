import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunnelAddOptions } from '../../../../src';

export const Tests: TestFixture<TunnelAddOptions>[] = [
  {
    description      : 'change GRE tunnel parameters',
    options          : {
      name: 'tun0',
      ttl : 64,
      dev : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'change',
      'name',
      'tun0',
      'ttl',
      64,
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip tunnel change name tun0 ttl 64 dev eth0`
  },
  {
    description      : 'change IPIP tunnel parameters',
    options          : {
      name: 'tun1',
      ttl : 32,
      dev : 'eth1'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'change',
      'name',
      'tun1',
      'ttl',
      32,
      'dev',
      'eth1'
    ],
    expectedCmdToExec: ` ip tunnel change name tun1 ttl 32 dev eth1`
  }
];

export default Tests;
