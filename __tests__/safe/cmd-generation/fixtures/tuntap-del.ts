import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunTapTunnelAddOptions, TunTapTunnelModes } from '../../../../src';

export const Tests: TestFixture<TunTapTunnelAddOptions>[] = [
  {
    description      : 'delete a TUN device named `mytun0`',
    options          : {
      mode: TunTapTunnelModes.Tun,
      name: 'mytun0'
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'del',
      'mode',
      TunTapTunnelModes.Tun,
      'name',
      'mytun0'
    ],
    expectedCmdToExec: ` ip tuntap del mode ${ TunTapTunnelModes.Tun } name mytun0`
  },
  {
    description      : 'delete a TAP device named `mytap0`',
    options          : {
      mode: TunTapTunnelModes.Tap,
      name: 'mytap0'
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'del',
      'mode',
      TunTapTunnelModes.Tap,
      'name',
      'mytap0'
    ],
    expectedCmdToExec: ` ip tuntap del mode ${ TunTapTunnelModes.Tap } name mytap0`
  },
  {
    description      : 'delete a TAP device named `mytap1`',
    options          : {
      mode: TunTapTunnelModes.Tap,
      name: 'mytap1'
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'del',
      'mode',
      TunTapTunnelModes.Tap,
      'name',
      'mytap1'
    ],
    expectedCmdToExec: ` ip tuntap del mode ${ TunTapTunnelModes.Tap } name mytap1`
  }
];

export default Tests;
