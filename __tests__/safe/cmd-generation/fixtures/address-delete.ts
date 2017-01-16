import { AddressDeleteOptions } from '../../../../src/commands/address/delete.interfaces';
import { TestFixture }          from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<AddressDeleteOptions>[] = [
  {
    description      : 'with `local` and `dev`',
    options          : {
      local: '2001:0db8:85a3::0370:7334/64',
      dev  : 'eth1'
    },
    expectedCmd      : [
      '',
      'ip',
      'address',
      'delete',
      'local',
      '2001:0db8:85a3::0370:7334/64',
      'dev',
      'eth1'
    ],
    expectedCmdToExec: ` ip address delete local 2001:0db8:85a3::0370:7334/64 dev eth1`
  }
];

export default Tests;