import { LinkDeleteOptions } from '../../../../src/commands/link/delete.interfaces';
import { TestFixture }       from '../../../../src/common/interfaces/tests';
import { LinkTypes }  from '../../../../src/commands/link.constants';

export const Tests: TestFixture<LinkDeleteOptions>[] = [
  {
    description:       'with `type vlan` and only `dev`',
    options:           {
      dev_: 'vlan100',
      type: LinkTypes.Vlan
    },
    expectedCmd:       [
      '',
      'ip',
      'link',
      'delete',
      'vlan100',
      'type',
      LinkTypes.Vlan
    ],
    expectedCmdToExec: ` ip link delete vlan100 type ${LinkTypes.Vlan}`
  },
  {
    description:       'with `type vlan` and `dev` with type',
    options:           {
      dev_: 'vlan100',
      type: LinkTypes.Vlan
    },
    expectedCmd:       [
      '',
      'ip',
      'link',
      'delete',
      'vlan100',
      'type',
      LinkTypes.Vlan
    ],
    expectedCmdToExec: ` ip link delete vlan100 type ${ LinkTypes.Vlan }`
  }
];

export default Tests;