import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunTapTunnelModes, TunTapTunnelShowOptions } from '../../../../src';

export const Tests: TestFixture<TunTapTunnelShowOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'tuntap',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json tuntap show`
  },
  {
    description      : 'with a mode set',
    options          : {
      mode: TunTapTunnelModes.Tun
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'tuntap',
      'show',
      'mode',
      TunTapTunnelModes.Tun
    ],
    expectedCmdToExec: ` ip -details -statistics -json tuntap show mode ${ TunTapTunnelModes.Tun }`
  }
];

export default Tests;