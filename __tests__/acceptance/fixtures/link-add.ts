import { TestFixture }    from '../../../src/common/interfaces/tests';
import {
  ErspanDirections,
  IpipSipDeviceModes,
  IpoIbModes,
  SecondaryUdpEncapsulations,
  VirtualLinkTypes,
  VlanProtocols
}                         from '../../../src/modules/link/models/add.constants';
import { LinkAddOptions } from '../../../src/modules/link/models/add.interfaces';

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
  },
  {
    description      : 'with `type veth`',
    options          : {
      link     : 'eth0',
      name     : 'veth0',
      type     : VirtualLinkTypes.Veth,
      type_args: {
        'peer name': 'veth1'
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
      'veth0',
      'type',
      VirtualLinkTypes.Veth,
      'peer name',
      'veth1'
    ],
    expectedCmdToExec: ' ip link add link eth0 name veth0 type veth peer name veth1'
  },
  {
    description      : 'with `type vxcan`',
    options          : {
      link     : 'eth0',
      name     : 'vxcan0',
      type     : VirtualLinkTypes.Vxcan,
      type_args: {
        'peer name': 'vxcan1'
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
      'vxcan0',
      'type',
      VirtualLinkTypes.Vxcan,
      'peer name',
      'vxcan1'
    ],
    expectedCmdToExec: ' ip link add link eth0 name vxcan0 type vxcan peer name vxcan1'
  },
  {
    description      : 'with `type ipip`',
    options          : {
      link     : 'eth0',
      name     : 'ipiptun0',
      type     : VirtualLinkTypes.Ipip,
      type_args: {
        local        : '192.168.1.10',
        remote       : '203.0.113.10',
        'encap-sport': 5000,
        external     : true
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
      'ipiptun0',
      'type',
      VirtualLinkTypes.Ipip,
      'local',
      '192.168.1.10',
      'remote',
      '203.0.113.10',
      'encap-sport',
      5000,
      'external'
    ],
    expectedCmdToExec: ' ip link add link eth0 name ipiptun0 type ipip local 192.168.1.10 remote 203.0.113.10 encap-sport 5000 external'
  },
  {
    description      : 'with `type sit`',
    options          : {
      link     : 'eth0',
      name     : 'sit0',
      type     : VirtualLinkTypes.Sit,
      type_args: {
        local : '203.0.113.10',
        remote: '198.51.100.10',
        encap : SecondaryUdpEncapsulations.Fou,
        mode  : IpipSipDeviceModes.Mplsip
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
      'sit0',
      'type',
      VirtualLinkTypes.Sit,
      'local',
      '203.0.113.10',
      'remote',
      '198.51.100.10',
      'encap',
      SecondaryUdpEncapsulations.Fou,
      'mode',
      IpipSipDeviceModes.Mplsip
    ],
    expectedCmdToExec: ' ip link add link eth0 name sit0 type sit local 203.0.113.10 remote 198.51.100.10 encap fou mode mplsip'
  },
  {
    description      : 'with `type gre`',
    options          : {
      link     : 'eth0',
      name     : 'gre1',
      type     : VirtualLinkTypes.Gre,
      type_args: {
        local : '192.168.1.10',
        remote: '203.0.113.10',
        key   : 56789,
        ttl   : 64
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
      'gre1',
      'type',
      VirtualLinkTypes.Gre,
      'local',
      '192.168.1.10',
      'remote',
      '203.0.113.10',
      'key',
      56789,
      'ttl',
      64
    ],
    expectedCmdToExec: ' ip link add link eth0 name gre1 type gre local 192.168.1.10 remote 203.0.113.10 key 56789 ttl 64'
  },
  {
    description      : 'with `type gretap`',
    options          : {
      link     : 'eth0',
      name     : 'gretap1',
      type     : VirtualLinkTypes.Gretap,
      type_args: {
        local : '192.168.1.10',
        remote: '203.0.113.10',
        key   : 1234,
        encap : SecondaryUdpEncapsulations.Fou,
        ttl   : 64
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
      'gretap1',
      'type',
      VirtualLinkTypes.Gretap,
      'local',
      '192.168.1.10',
      'remote',
      '203.0.113.10',
      'key',
      1234,
      'encap',
      SecondaryUdpEncapsulations.Fou,
      'ttl',
      64
    ],
    expectedCmdToExec: ' ip link add link eth0 name gretap1 type gretap local 192.168.1.10 remote 203.0.113.10 key 1234 encap fou ttl 64'
  },
  {
    description      : 'with `type ip6gre`',
    options          : {
      link     : 'eth0',
      name     : 'gre1',
      type     : VirtualLinkTypes.Ip6gre,
      type_args: {
        local     : '2001:db8::1',
        remote    : '2001:db8::2',
        hoplimit  : 64,
        encaplimit: 4,
        tclass    : '32',
        flowlabel : 12345,
        dev       : 'eth0'
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
      'gre1',
      'type',
      VirtualLinkTypes.Ip6gre,
      'local',
      '2001:db8::1',
      'remote',
      '2001:db8::2',
      'hoplimit',
      64,
      'encaplimit',
      4,
      'tclass',
      '32',
      'flowlabel',
      12345,
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ' ip link add link eth0 name gre1 type ip6gre local 2001:db8::1 remote 2001:db8::2 hoplimit 64 encaplimit 4 tclass 32 flowlabel 12345 dev eth0'
  },
  {
    description      : 'with `type ip6gretap`',
    options          : {
      link     : 'eth0',
      name     : 'gre1',
      type     : VirtualLinkTypes.Ip6gretap,
      type_args: {
        local     : '2001:db8::1',
        remote    : '2001:db8::2',
        hoplimit  : 64,
        encaplimit: 4,
        tclass    : '32',
        flowlabel : 12345,
        dev       : 'eth0'
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
      'gre1',
      'type',
      VirtualLinkTypes.Ip6gretap,
      'local',
      '2001:db8::1',
      'remote',
      '2001:db8::2',
      'hoplimit',
      64,
      'encaplimit',
      4,
      'tclass',
      '32',
      'flowlabel',
      12345,
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ' ip link add link eth0 name gre1 type ip6gretap local 2001:db8::1 remote 2001:db8::2 hoplimit 64 encaplimit 4 tclass 32 flowlabel 12345 dev eth0'
  },
  {
    description      : 'with `type ipoib`',
    options          : {
      link     : 'ib0',
      name     : 'ib0.8001',
      type     : VirtualLinkTypes.Ipoib,
      type_args: {
        pkey: 'B001',
        mode: IpoIbModes.Connected
      }
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'add',
      'link',
      'ib0',
      'name',
      'ib0.8001',
      'type',
      VirtualLinkTypes.Ipoib,
      'pkey',
      'B001',
      'mode',
      'connected'
    ],
    expectedCmdToExec: ' ip link add link ib0 name ib0.8001 type ipoib pkey B001 mode connected'
  },
  {
    description      : 'with `type erspan`',
    options          : {
      link     : 'eth0',
      name     : 'erspan1',
      type     : VirtualLinkTypes.Erspan,
      type_args: {
        local      : '10.0.0.1',
        remote     : '10.0.0.2',
        seq        : true,
        key        : 101,
        erspan_ver : 2,
        erspan_hwid: 15
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
      'erspan1',
      'type',
      VirtualLinkTypes.Erspan,
      'local',
      '10.0.0.1',
      'remote',
      '10.0.0.2',
      'seq',
      'key',
      101,
      'erspan_ver',
      2,
      'erspan_hwid',
      15
    ],
    expectedCmdToExec: ' ip link add link eth0 name erspan1 type erspan local 10.0.0.1 remote 10.0.0.2 seq key 101 erspan_ver 2 erspan_hwid 15'
  },
  {
    description      : 'with `type ip6erspan`',
    options          : {
      link     : 'eth0',
      name     : 'ip6erspan1',
      type     : VirtualLinkTypes.Ip6erspan,
      type_args: {
        local      : '2001:db8::1',
        remote     : '2001:db8::2',
        seq        : true,
        key        : 123,
        erspan_ver : 1,
        erspan_dir : ErspanDirections.Egress,
        erspan_hwid: 15
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
      'ip6erspan1',
      'type',
      VirtualLinkTypes.Ip6erspan,
      'local',
      '2001:db8::1',
      'remote',
      '2001:db8::2',
      'seq',
      'key',
      123,
      'erspan_ver',
      1,
      'erspan_dir',
      ErspanDirections.Egress,
      'erspan_hwid',
      15
    ],
    expectedCmdToExec: ' ip link add link eth0 name ip6erspan1 type ip6erspan local 2001:db8::1 remote 2001:db8::2 seq key 123 erspan_ver 1 erspan_dir egress erspan_hwid 15'
  }
];

export default Tests;