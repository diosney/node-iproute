import { Empty, GlobalOptionsWithRequiredStdin } from '../../../../src/common/interfaces/common';
import { TestFixture } from '../../../../src/common/interfaces/tests';

export const Tests: TestFixture<Empty, GlobalOptionsWithRequiredStdin>[] = [
  {
    description      : 'with input from stdin',
    options          : {},
    globalOptions    : {
      stdin: [
        'address add local 127.0.1.4 dev lo',
        'address add local 127.0.1.5 dev lo',
        'address add local 127.0.1.6 dev lo',
        'address add local 127.0.1.7 dev lo'
      ].join('\n')
    },
    expectedCmd      : [
      '',
      'ip',
      '-batch',
      '- <<EOF\n',
      'address add local 127.0.1.4 dev lo\naddress add local 127.0.1.5 dev lo\naddress add local 127.0.1.6 dev lo\naddress add local 127.0.1.7 dev lo',
      '\nEOF'
    ],
    expectedCmdToExec: ` ip -batch - <<EOF\n address add local 127.0.1.4 dev lo\naddress add local 127.0.1.5 dev lo\naddress add local 127.0.1.6 dev lo\naddress add local 127.0.1.7 dev lo \nEOF`
  }
];

export default Tests;