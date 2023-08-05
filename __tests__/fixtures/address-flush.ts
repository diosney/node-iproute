import { TestFixture }         from '../../src/common/interfaces/tests';
import { AddressScopes }       from '../../src/commands/address/add.constants';
import { AddressFlushOptions } from '../../src/commands/address/flush.interfaces';

export const Tests: TestFixture<AddressFlushOptions>[] = [
  {
    description      : 'with `local` and `dev`',
    options          : {
      dev  : 'eth4',
      scope: AddressScopes.Global
    },
    expectedCmd      : [
      '',
      'ip',
      'address',
      'flush',
      'dev',
      'eth4',
      'scope',
      AddressScopes.Global
    ],
    expectedCmdToExec: ` ip address flush dev eth4 scope ${AddressScopes.Global}`
  }
];

export default Tests;