import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunnelAddOptions } from '../../../../src';
import { TunnelModes } from '../../../../src/commands/tunnel.constants';

export const Tests: TestFixture<TunnelAddOptions>[] = [
  {
    description      : 'simple GRE tunnel',
    options          : {
      name  : 'tun0',
      mode  : TunnelModes.Gre,
      remote: '203.0.113.4',
      local : '203.0.113.5',
      dev   : 'eth0'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'add',
      'name',
      'tun0',
      'mode',
      TunnelModes.Gre,
      'remote',
      '203.0.113.4',
      'local',
      '203.0.113.5',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip tunnel add name tun0 mode ${ TunnelModes.Gre } remote 203.0.113.4 local 203.0.113.5 dev eth0`
  },
  {
    description      : 'IPIP tunnel',
    options          : {
      name  : 'tun1',
      mode  : TunnelModes.Ipip,
      remote: '203.0.113.6',
      local : '203.0.113.7',
      dev   : 'eth1'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'add',
      'name',
      'tun1',
      'mode',
      TunnelModes.Ipip,
      'remote',
      '203.0.113.6',
      'local',
      '203.0.113.7',
      'dev',
      'eth1'
    ],
    expectedCmdToExec: ` ip tunnel add name tun1 mode ${ TunnelModes.Ipip } remote 203.0.113.6 local 203.0.113.7 dev eth1`
  }
];

export default Tests;
