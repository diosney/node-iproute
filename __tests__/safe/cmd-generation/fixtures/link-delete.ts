import { LinkDeleteOptions } from '../../../../src/commands/link/delete.interfaces';
import { TestFixture } from '../../../../src/common/interfaces/tests';
import { LinkTypes, VlanProtocols } from '../../../../src/commands/link.constants';

export const Tests: TestFixture<LinkDeleteOptions>[] = [
  {
    description: 'with only `dev`',
    options: {
      dev: 'vlan100'
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'delete',
      'vlan100'
    ],
    expectedCmdToExec: ` ip link delete vlan100`
  },
  {
    description: 'with `dev` with type=vlan',
    options: {
      dev : 'vlan100',
      type: {
        [LinkTypes.Vlan]: {
          protocol: VlanProtocols['802.1Q'],
          id: 100
        }
      }
    },
    expectedCmd: [
      '',
      'ip',
      'link',
      'delete',
      'vlan100',
      'type',
      LinkTypes.Vlan,
      'protocol',
      VlanProtocols['802.1Q'],
      'id',
      100
    ],
    expectedCmdToExec: ` ip link delete vlan100 type ${ LinkTypes.Vlan } protocol ${ VlanProtocols['802.1Q'] } id ${ 100 }`
  }
];

export default Tests;