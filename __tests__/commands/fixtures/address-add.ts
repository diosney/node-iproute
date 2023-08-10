import { AddressAddOptions } from '../../../src/commands/address/add.interfaces';
import { TestFixture }       from '../../../src/common/interfaces/tests';

export const Tests: TestFixture<AddressAddOptions>[] = [
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
      'add',
      'local',
      '2001:0db8:85a3::0370:7334/64',
      'dev',
      'eth1'
    ],
    expectedCmdToExec: ` ip address add local 2001:0db8:85a3::0370:7334/64 dev eth1`
  }
];

export default Tests;