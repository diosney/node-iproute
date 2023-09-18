import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunnelPrlOptions } from '../../../../src';  // Assuming there's a suitable type for prl (Potential Router List)

export const Tests: TestFixture<TunnelPrlOptions>[] = [
  {
    description      : 'with `prl-default` option set',
    options          : {
      dev            : 'tun0',
      'prl-default': '203.0.113.8'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'prl',
      'dev',
      'tun0',
      'prl-default',
      '203.0.113.8'
    ],
    expectedCmdToExec: ` ip tunnel prl dev tun0 prl-default 203.0.113.8`
  },
  {
    description      : 'with `prl-delete` option set',
    options          : {
      dev         : 'tun0',
      'prl-delete': '203.0.113.9'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'prl',
      'dev',
      'tun0',
      'prl-delete',
      '203.0.113.9'
    ],
    expectedCmdToExec: ` ip tunnel prl dev tun0 prl-delete 203.0.113.9`
  }
];

export default Tests;
