import { Empty, GlobalOptionsWithRequiredFilePath } from '../../../../src/common/interfaces/common';
import { TestFixture } from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<Empty, GlobalOptionsWithRequiredFilePath>[] = [
  {
    description      : 'with input from file path',
    options          : {},
    globalOptions    : {
      filePath: '/tmp/batch-file'
    },
    expectedCmd      : [
      '',
      'ip',
      '-batch',
      '/tmp/batch-file'
    ],
    expectedCmdToExec: ` ip -batch /tmp/batch-file`
  }
];

export default Tests;