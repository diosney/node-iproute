import { LinkShowOptions } from '../../src/commands/link/show.interfaces';
import { TestFixture }     from '../../src/common/interfaces/tests';

export const Tests: TestFixture<LinkShowOptions>[] = [
  {
    description      : 'with no params',
    options          : {},
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'link',
      'show'
    ],
    expectedCmdToExec: ` ip -details -statistics -json link show`
  },
  {
    description      : 'for all up interfaces',
    options          : {
      up: true
    },
    expectedCmd      : [
      '',
      'ip',
      '-details',
      '-statistics',
      '-json',
      'link',
      'show',
      'up'
    ],
    expectedCmdToExec: ` ip -details -statistics -json link show up`
  }
];

export default Tests;