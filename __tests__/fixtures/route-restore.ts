import { EmptyOptions }                      from '../../src/common/interfaces/common';
import { GlobalOptionsWithRequiredFilePath } from '../../src/common/interfaces/common';
import { TestFixture }                       from '../../src/common/interfaces/tests';

export const Tests: TestFixture<EmptyOptions, GlobalOptionsWithRequiredFilePath>[] = [
  {
    description      : 'with `filePath` set',
    options          : {},
    globalOptions    : {
      filePath: './test-dump-file.binary'
    },
    expectedCmd      : [
      '',
      'ip',
      'route',
      'restore',
      '<',
      './test-dump-file.binary'
    ],
    expectedCmdToExec: ` ip route restore < ./test-dump-file.binary`
  }
];

export default Tests;