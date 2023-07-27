import { LinkAddOptions }                  from '../../src/modules/link/models/add.interfaces';
import { TestFixture }                     from '../../src/common/interfaces/tests';
import { VirtualLinkTypes, VlanProtocols } from '../../src/modules/link/models/add.constants';

export const Tests: TestFixture<LinkAddOptions>[] = [
  {
    description      : 'with `type vlan`',
    options          : {
      link     : 'eth0',
      name     : 'vlan100',
      address  : '00:11:22:33:44:55',
      mtu      : 1500,
      type     : VirtualLinkTypes.Vlan,
      type_args: {
        id      : 100,
        protocol: VlanProtocols['802.1Q']
      }
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'add',
      'link',
      'eth0',
      'name',
      'vlan100',
      'address',
      '00:11:22:33:44:55',
      'mtu',
      1500,
      'type',
      VirtualLinkTypes.Vlan,
      'id',
      100,
      'protocol',
      VlanProtocols['802.1Q']
    ],
    expectedCmdToExec: ' ip link add link eth0 name vlan100 address 00:11:22:33:44:55 mtu 1500 type vlan id 100 protocol 802.1Q'
  },
  {
    description      : 'with `type vxlan`',
    options          : {
      link     : 'eth0',
      name     : 'vxlan0',
      type     : VirtualLinkTypes.Vxlan,
      type_args: {
        id     : 100,
        dev    : 'eth0',
        group  : '239.1.1.1',
        local  : '192.168.1.10',
        ttl    : 64,
        dstport: 4789
      }
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'add',
      'link',
      'eth0',
      'name',
      'vxlan0',
      'type',
      VirtualLinkTypes.Vxlan,
      'id',
      100,
      'dev',
      'eth0',
      'group',
      '239.1.1.1',
      'local',
      '192.168.1.10',
      'ttl',
      64,
      'dstport',
      4789
    ],
    expectedCmdToExec: ' ip link add link eth0 name vxlan0 type vxlan id 100 dev eth0 group 239.1.1.1 local 192.168.1.10 ttl 64 dstport 4789'
  }
];

export default Tests;