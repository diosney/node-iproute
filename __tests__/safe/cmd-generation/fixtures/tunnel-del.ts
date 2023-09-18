import { TestFixture } from '../../../../src/common/interfaces/tests';
import { TunnelAddOptions } from '../../../../src';  // Assuming there's a suitable type for deletion

export const Tests: TestFixture<TunnelAddOptions>[] = [
  {
    description      : 'delete simple GRE tunnel',
    options          : {
      name: 'tun0'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'del',
      'name',
      'tun0'
    ],
    expectedCmdToExec: ` ip tunnel del name tun0`
  },
  {
    description      : 'delete IPIP tunnel',
    options          : {
      name: 'tun1'
    },
    expectedCmd      : [
      '',
      'ip',
      'tunnel',
      'del',
      'name',
      'tun1'
    ],
    expectedCmdToExec: ` ip tunnel del name tun1`
  }
];

export default Tests;
