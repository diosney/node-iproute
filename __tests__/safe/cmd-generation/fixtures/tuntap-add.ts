import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunTapTunnelAddOptions, TunTapTunnelModes } from '../../../../src';

export const Tests: TestFixture<TunTapTunnelAddOptions>[] = [
  {
    description      : 'create a TUN device named `mytun0`',
    options          : {
      dev : 'mytun0',
      mode: TunTapTunnelModes.Tun
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'add',
      'dev',
      'mytun0',
      'mode',
      TunTapTunnelModes.Tun
    ],
    expectedCmdToExec: ` ip tuntap add dev mytun0 mode ${ TunTapTunnelModes.Tun }`
  },
  {
    description      : 'create a TAP device named `mytap0`',
    options          : {
      dev : 'mytap0',
      mode: TunTapTunnelModes.Tap
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'add',
      'dev',
      'mytap0',
      'mode',
      TunTapTunnelModes.Tap
    ],
    expectedCmdToExec: ` ip tuntap add dev mytap0 mode ${ TunTapTunnelModes.Tap }`
  },
  {
    description      : 'create a TAP device named `mytap1` and set the user ID to 1000 (commonly the default user ID for the first non-root user)',
    options          : {
      dev : 'mytap1',
      mode: TunTapTunnelModes.Tap,
      user: 1000
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'add',
      'dev',
      'mytap1',
      'mode',
      TunTapTunnelModes.Tap,
      'user',
      1000
    ],
    expectedCmdToExec: ` ip tuntap add dev mytap1 mode ${ TunTapTunnelModes.Tap } user 1000`
  },
  {
    description      : 'create a TUN device with multi-queue support (for improved multi-core performance)',
    options          : {
      dev        : 'mytun1',
      mode       : TunTapTunnelModes.Tun,
      multi_queue: true
    },
    expectedCmd      : [
      '',
      'ip',
      'tuntap',
      'add',
      'dev',
      'mytun1',
      'mode',
      TunTapTunnelModes.Tun,
      'multi_queue'
    ],
    expectedCmdToExec: ` ip tuntap add dev mytun1 mode ${ TunTapTunnelModes.Tun } multi_queue`
  }
];

export default Tests;
