import { GlobalOptionsWithRequiredFilePath } from '../../../src/common/interfaces/common';
import { TestFixture }                       from '../../../src/common/interfaces/tests';

export const Tests: TestFixture<{}, GlobalOptionsWithRequiredFilePath>[] = [
  {
    description      : 'with `filePath` set',
    options          : {},
    globalOptions    : {
      filePath: './test-dump-file.binary'
    },
    expectedCmd      : [
      '',
      'ip',
      'address',
      'restore',
      '<',
      './test-dump-file.binary'
    ],
    expectedCmdToExec: ` ip address restore < ./test-dump-file.binary`
  }
];

export default Tests;