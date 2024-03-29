import { Empty }                             from '../../../../src/common/interfaces/common';
import { GlobalOptionsWithRequiredFilePath } from '../../../../src/common/interfaces/common';
import { TestFixture }                       from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<Empty, GlobalOptionsWithRequiredFilePath>[] = [
  {
    description      : 'with no params',
    options          : {},
    globalOptions    : {
      filePath: './test-dump-file.binary'
    },
    expectedCmd      : [
      '',
      'ip',
      'route',
      'save',
      '>',
      './test-dump-file.binary'
    ],
    expectedCmdToExec: ` ip route save > ./test-dump-file.binary`
  }
];

export default Tests;