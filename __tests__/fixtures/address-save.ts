import { GlobalOptionsWithRequiredFilePath } from '../../lib/common/interfaces/common';
import { TestFixture }                       from '../../src/common/interfaces/tests';
import { AddressScopes }                     from '../../src/modules/address/models/add.constants';
import { AddressFlushOptions }               from '../../src/modules/address/models/flush.interfaces';

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