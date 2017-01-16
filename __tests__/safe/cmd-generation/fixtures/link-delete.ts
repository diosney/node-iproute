import { LinkDeleteOptions } from '../../../../src/commands/link/delete.interfaces';
import { TestFixture }       from '../../../../src/common/interfaces/tests';
import { VirtualLinkTypes }  from '../../../../src/commands/link.constants';

export const Tests: TestFixture<LinkDeleteOptions>[] = [
  {
    description:       'with `type vlan` and only `dev`',
    options:           {
      dev_: 'vlan100'
    },
    expectedCmd:       [
      '',
      'ip',
      'link',
      'delete',
      'vlan100'
    ],
    expectedCmdToExec: ` ip link delete vlan100`
  },
  {
    description:       'with `type vlan` and `dev` with type',
    options:           {
      dev_: 'vlan100',
      type: VirtualLinkTypes.Vlan
    },
    expectedCmd:       [
      '',
      'ip',
      'link',
      'delete',
      'vlan100',
      'type',
      VirtualLinkTypes.Vlan
    ],
    expectedCmdToExec: ` ip link delete vlan100 type ${ VirtualLinkTypes.Vlan }`
  }
];

export default Tests;