import { GlobalOptionsWithRequiredFilePath } from '../../../src/common/interfaces/common';
import { TestFixture }                       from '../../../src/common/interfaces/tests';
import { AddressScopes }                     from '../../../src/commands/address.constants';
import { AddressFlushOptions }               from '../../../src/commands/address/flush.interfaces';

export const Tests: TestFixture<AddressFlushOptions, GlobalOptionsWithRequiredFilePath>[] = [
  {
    description      : 'with `local` and `dev`',
    options          : {
      dev  : 'eth4',
      scope: AddressScopes.Global
    },
    globalOptions    : {
      filePath: './test-dump-file.binary'
    },
    expectedCmd      : [
      '',
      'ip',
      'address',
      'save',
      'dev',
      'eth4',
      'scope',
      AddressScopes.Global,
      '>',
      './test-dump-file.binary'
    ],
    expectedCmdToExec: ` ip address save dev eth4 scope ${AddressScopes.Global} > ./test-dump-file.binary`
  }
];

export default Tests;