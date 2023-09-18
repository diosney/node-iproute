import { TestFixture } from '../../../../src/common/interfaces/tests';
import { Tunnel6rdOptions } from '../../../../src';  // Assuming there's a suitable type for 6rd configurations

export const Tests: TestFixture<Tunnel6rdOptions>[] = [
  {
    description      : 'simple 6rd tunnel',
    options          : {
      dev         : 'tun0',
      '6rd-prefix': '2001:db8::'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      '6rd',
      'dev',
      'tun0',
      '6rd-prefix',
      '2001:db8::'
    ],
    expectedCmdToExec: ` ip tunnel 6rd dev tun0 6rd-prefix 2001:db8::`
  },
  {
    description      : '6rd tunnel with relay prefix',
    options          : {
      dev               : 'tun0',
      '6rd-prefix'      : '2001:db9::',
      '6rd-relay_prefix': '192.168.1.0'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      '6rd',
      'dev',
      'tun0',
      '6rd-prefix',
      '2001:db9::',
      '6rd-relay_prefix',
      '192.168.1.0'
    ],
    expectedCmdToExec: ` ip tunnel 6rd dev tun0 6rd-prefix 2001:db9:: 6rd-relay_prefix 192.168.1.0`
  }
// You can continue adding more cases as needed for various configurations
];

export default Tests;
