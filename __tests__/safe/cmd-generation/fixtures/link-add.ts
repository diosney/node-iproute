import { EnableDisableToggle, OnOffToggle } from '../../../../src/common/constants/attribute-values';
import { TestFixture } from '../../../../src/common/interfaces/tests';
import { DontFragmentFlagValues, ErspanDirections, IgmpVersions, IpipSipDeviceModes, IpoIbModes, LinkTypes, MacvlanMacvtapModes, SecondaryUdpEncapsulations, VlanProtocols } from '../../../../src/commands/link.constants';
import { LinkAddOptions } from '../../../../src/commands/link/add.interfaces';

export const Tests: TestFixture<LinkAddOptions>[] = [
  {
    description      : 'with `type vlan`',
    options          : {
      link   : 'eth0',
      name   : 'vlan100',
      address: '00:11:22:33:44:55',
      mtu    : 1500,
      type   : {
        [LinkTypes.Vlan]: {
          id      : 100,
          protocol: VlanProtocols['802.1Q']
        }
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
      LinkTypes.Vlan,
      'protocol',
      VlanProtocols['802.1Q'],
      'id',
      100
    ],
    expectedCmdToExec: ` ip link add link eth0 name vlan100 address 00:11:22:33:44:55 mtu 1500 type ${LinkTypes.Vlan} protocol ${VlanProtocols['802.1Q']} id 100`
  },
  {
    description      : 'with `type vxlan`',
    options          : {
      link: 'eth0',
      name: 'vxlan0',
      type: {
        [LinkTypes.Vxlan]: {
          id     : 100,
          dev    : 'eth0',
          group  : '239.1.1.1',
          local  : '192.168.1.10',
          ttl    : 64,
          dstport: 4789
        }
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
      LinkTypes.Vxlan,
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
    expectedCmdToExec: ` ip link add link eth0 name vxlan0 type ${LinkTypes.Vxlan} id 100 dev eth0 group 239.1.1.1 local 192.168.1.10 ttl 64 dstport 4789`
  },
  {
    description      : 'with `type veth`',
    options          : {
      link: 'eth0',
      name: 'veth0',
      type: {
        [LinkTypes.Veth]: {
          'peer name': 'veth1'
        }
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
      LinkTypes.Veth,
      'peer name',
      'veth1'
    ],
    expectedCmdToExec: ` ip link add link eth0 name veth0 type ${LinkTypes.Veth} peer name veth1`
  },
  {
    description      : 'with `type vxcan`',
    options          : {
      link: 'eth0',
      name: 'vxcan0',
      type: {
        [LinkTypes.Vxcan]: {
          'peer name': 'vxcan1'
        }
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
      LinkTypes.Vxcan,
      'peer name',
      'vxcan1'
    ],
    expectedCmdToExec: ` ip link add link eth0 name vxcan0 type ${LinkTypes.Vxcan} peer name vxcan1`
  },
  {
    description      : 'with `type ipip`',
    options          : {
      link: 'eth0',
      name: 'ipiptun0',
      type: {
        [LinkTypes.Ipip]: {
          local        : '192.168.1.10',
          remote       : '203.0.113.10',
          'encap-sport': 5000,
          external     : true
        }
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
      LinkTypes.Ipip,
      'remote',
      '203.0.113.10',
      'local',
      '192.168.1.10',
      'encap-sport',
      5000,
      'external'
    ],
    expectedCmdToExec: ` ip link add link eth0 name ipiptun0 type ${LinkTypes.Ipip} remote 203.0.113.10 local 192.168.1.10 encap-sport 5000 external`
  },
  {
    description      : 'with `type sit`',
    options          : {
      link: 'eth0',
      name: 'sit0',
      type: {
        [LinkTypes.Sit]: {
          local : '203.0.113.10',
          remote: '198.51.100.10',
          encap : SecondaryUdpEncapsulations.Fou,
          mode  : IpipSipDeviceModes.Mplsip
        }
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
      LinkTypes.Sit,
      'remote',
      '198.51.100.10',
      'local',
      '203.0.113.10',
      'encap',
      SecondaryUdpEncapsulations.Fou,
      'mode',
      IpipSipDeviceModes.Mplsip
    ],
    expectedCmdToExec: ` ip link add link eth0 name sit0 type ${LinkTypes.Sit} remote 198.51.100.10 local 203.0.113.10 encap ${SecondaryUdpEncapsulations.Fou} mode ${IpipSipDeviceModes.Mplsip}`
  },
  {
    description      : 'with `type gre`',
    options          : {
      link: 'eth0',
      name: 'gre1',
      type: {
        [LinkTypes.Gre]: {
          local : '192.168.1.10',
          remote: '203.0.113.10',
          key   : 56789,
          ttl   : 64
        }
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
      LinkTypes.Gre,
      'remote',
      '203.0.113.10',
      'local',
      '192.168.1.10',
      'key',
      56789,
      'ttl',
      64
    ],
    expectedCmdToExec: ` ip link add link eth0 name gre1 type ${LinkTypes.Gre} remote 203.0.113.10 local 192.168.1.10 key 56789 ttl 64`
  },
  {
    description      : 'with `type gretap`',
    options          : {
      link: 'eth0',
      name: 'gretap1',
      type: {
        [LinkTypes.Gretap]: {
          local : '192.168.1.10',
          remote: '203.0.113.10',
          key   : 1234,
          encap : SecondaryUdpEncapsulations.Fou,
          ttl   : 64
        }
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
      LinkTypes.Gretap,
      'remote',
      '203.0.113.10',
      'local',
      '192.168.1.10',
      'key',
      1234,
      'ttl',
      64,
      'encap',
      SecondaryUdpEncapsulations.Fou
    ],
    expectedCmdToExec: ` ip link add link eth0 name gretap1 type ${LinkTypes.Gretap} remote 203.0.113.10 local 192.168.1.10 key 1234 ttl 64 encap ${SecondaryUdpEncapsulations.Fou}`
  },
  {
    description      : 'with `type ip6gre`',
    options          : {
      link: 'eth0',
      name: 'gre1',
      type: {
        [LinkTypes.Ip6gre]: {
          local     : '2001:db8::1',
          remote    : '2001:db8::2',
          hoplimit  : 64,
          encaplimit: 4,
          tclass    : '32',
          flowlabel : 12345,
          dev       : 'eth0'
        }
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
      LinkTypes.Ip6gre,
      'remote',
      '2001:db8::2',
      'local',
      '2001:db8::1',
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
    expectedCmdToExec: ` ip link add link eth0 name gre1 type ${LinkTypes.Ip6gre} remote 2001:db8::2 local 2001:db8::1 hoplimit 64 encaplimit 4 tclass 32 flowlabel 12345 dev eth0`
  },
  {
    description      : 'with `type ip6gretap`',
    options          : {
      link: 'eth0',
      name: 'gre1',
      type: {
        [LinkTypes.Ip6gretap]: {
          local     : '2001:db8::1',
          remote    : '2001:db8::2',
          hoplimit  : 64,
          encaplimit: 4,
          tclass    : '32',
          flowlabel : 12345,
          dev       : 'eth0'
        }
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
      LinkTypes.Ip6gretap,
      'remote',
      '2001:db8::2',
      'local',
      '2001:db8::1',
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
    expectedCmdToExec: ` ip link add link eth0 name gre1 type ${LinkTypes.Ip6gretap} remote 2001:db8::2 local 2001:db8::1 hoplimit 64 encaplimit 4 tclass 32 flowlabel 12345 dev eth0`
  },
  {
    description      : 'with `type ipoib`',
    options          : {
      link: 'ib0',
      name: 'ib0.8001',
      type: {
        [LinkTypes.Ipoib]: {
          pkey: 'B001',
          mode: IpoIbModes.Connected
        }
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
      LinkTypes.Ipoib,
      'pkey',
      'B001',
      'mode',
      'connected'
    ],
    expectedCmdToExec: ` ip link add link ib0 name ib0.8001 type ${LinkTypes.Ipoib} pkey B001 mode connected`
  },
  {
    description      : 'with `type erspan`',
    options          : {
      link: 'eth0',
      name: 'erspan1',
      type: {
        [LinkTypes.Erspan]: {
          local      : '10.0.0.1',
          remote     : '10.0.0.2',
          seq        : true,
          key        : 101,
          erspan_ver : 2,
          erspan_hwid: 15
        }
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
      LinkTypes.Erspan,
      'remote',
      '10.0.0.2',
      'local',
      '10.0.0.1',
      'seq',
      'key',
      101,
      'erspan_ver',
      2,
      'erspan_hwid',
      15
    ],
    expectedCmdToExec: ` ip link add link eth0 name erspan1 type ${LinkTypes.Erspan} remote 10.0.0.2 local 10.0.0.1 seq key 101 erspan_ver 2 erspan_hwid 15`
  },
  {
    description      : 'with `type ip6erspan`',
    options          : {
      link: 'eth0',
      name: 'ip6erspan1',
      type: {
        [LinkTypes.Ip6erspan]: {
          local      : '2001:db8::1',
          remote     : '2001:db8::2',
          seq        : true,
          key        : 123,
          erspan_ver : 1,
          erspan_dir : ErspanDirections.Egress,
          erspan_hwid: 15
        }
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
      LinkTypes.Ip6erspan,
      'remote',
      '2001:db8::2',
      'local',
      '2001:db8::1',
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
    expectedCmdToExec: ` ip link add link eth0 name ip6erspan1 type ${LinkTypes.Ip6erspan} remote 2001:db8::2 local 2001:db8::1 seq key 123 erspan_ver 1 erspan_dir ${ErspanDirections.Egress} erspan_hwid 15`
  },
  {
    description      : 'with `type geneve`',
    options          : {
      link: 'eth0',
      name: 'geneve0',
      type: {
        [LinkTypes.Geneve]: {
          id     : 1234,
          remote : '192.0.2.1',
          dstport: 6081,
          ttl    : 255,
          tos    : 10,
          df     : DontFragmentFlagValues.Set
        }
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
      'geneve0',
      'type',
      LinkTypes.Geneve,
      'id',
      1234,
      'remote',
      '192.0.2.1',
      'ttl',
      255,
      'tos',
      10,
      'df',
      DontFragmentFlagValues.Set,
      'dstport',
      6081
    ],
    expectedCmdToExec: ` ip link add link eth0 name geneve0 type ${LinkTypes.Geneve} id 1234 remote 192.0.2.1 ttl 255 tos 10 df ${DontFragmentFlagValues.Set} dstport 6081`
  },
  {
    description      : 'with `type bareudp`',
    options          : {
      link: 'eth0',
      name: 'bareudp0',
      type: {
        [LinkTypes.Bareudp]: {
          dstport   : 5000,
          ethertype : 200,
          srcportmin: 4000
        }
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
      'bareudp0',
      'type',
      LinkTypes.Bareudp,
      'dstport',
      5000,
      'ethertype',
      200,
      'srcportmin',
      4000
    ],
    expectedCmdToExec: ` ip link add link eth0 name bareudp0 type ${LinkTypes.Bareudp} dstport 5000 ethertype 200 srcportmin 4000`
  },
  {
    description      : 'with `type macvlan`',
    options          : {
      link: 'eth0',
      name: 'macvlan0',
      type: {
        [LinkTypes.Macvlan]: {
          mode      : MacvlanMacvtapModes.Bridge,
          bcqueuelen: 800
        }
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
      'macvlan0',
      'type',
      LinkTypes.Macvlan,
      'mode',
      MacvlanMacvtapModes.Bridge,
      'bcqueuelen',
      800
    ],
    expectedCmdToExec: ` ip link add link eth0 name macvlan0 type ${LinkTypes.Macvlan} mode ${MacvlanMacvtapModes.Bridge} bcqueuelen 800`
  },
  {
    description      : 'with `type macvtap`',
    options          : {
      link: 'eth0',
      name: 'macvlan0',
      type: {
        [LinkTypes.Macvtap]: {
          mode: MacvlanMacvtapModes.Vepa
        }
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
      'macvlan0',
      'type',
      LinkTypes.Macvtap,
      'mode',
      MacvlanMacvtapModes.Vepa
    ],
    expectedCmdToExec: ` ip link add link eth0 name macvlan0 type ${LinkTypes.Macvtap} mode ${MacvlanMacvtapModes.Vepa}`
  },
  {
    description      : 'with `type hsr`',
    options          : {
      link: 'eth0',
      name: 'hsr0',
      type: {
        [LinkTypes.Hsr]: {
          slave1: 'eth0',
          slave2: 'eth1'
        }
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
      'hsr0',
      'type',
      LinkTypes.Hsr,
      'slave1',
      'eth0',
      'slave2',
      'eth1'
    ],
    expectedCmdToExec: ` ip link add link eth0 name hsr0 type ${LinkTypes.Hsr} slave1 eth0 slave2 eth1`
  },
  {
    description      : 'with `type vrf`',
    options          : {
      link: 'eth0',
      name: 'vrf0',
      type: {
        [LinkTypes.Vrf]: {
          table: 1000
        }
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
      'vrf0',
      'type',
      LinkTypes.Vrf,
      'table',
      1000
    ],
    expectedCmdToExec: ` ip link add link eth0 name vrf0 type ${LinkTypes.Vrf} table 1000`
  },
  {
    description      : 'with `type rmnet`',
    options          : {
      link: 'eth0',
      name: 'rmnet0',
      type: {
        [LinkTypes.Rmnet]: {
          mux_id: 200
        }
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
      'rmnet0',
      'type',
      LinkTypes.Rmnet,
      'mux_id',
      200
    ],
    expectedCmdToExec: ` ip link add link eth0 name rmnet0 type ${LinkTypes.Rmnet} mux_id 200`
  },
  {
    description      : 'with `type xfrm`',
    options          : {
      link: 'eth0',
      name: 'xfrm0',
      type: {
        [LinkTypes.Xfrm]: {
          dev  : 'eth0',
          if_id: 100
        }
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
      'xfrm0',
      'type',
      LinkTypes.Xfrm,
      'dev',
      'eth0',
      'if_id',
      100
    ],
    expectedCmdToExec: ` ip link add link eth0 name xfrm0 type ${LinkTypes.Xfrm} dev eth0 if_id 100`
  },
  {
    description      : 'with `type bridge`',
    options          : {
      link: 'eth0',
      name: 'br0',
      type: {
        [LinkTypes.Bridge]: {
          forward_delay     : 30,
          hello_time        : 10,
          max_age           : 40,
          stp_state         : EnableDisableToggle.Enable,
          priority          : 32768,
          mcast_igmp_version: IgmpVersions.v3,
          nf_call_iptables  : EnableDisableToggle.Enable,
          nf_call_ip6tables : EnableDisableToggle.Enable,
          nf_call_arptables : EnableDisableToggle.Disable
        }
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
      'br0',
      'type',
      LinkTypes.Bridge,
      'forward_delay',
      30,
      'hello_time',
      10,
      'max_age',
      40,
      'stp_state',
      EnableDisableToggle.Enable,
      'priority',
      32768,
      'mcast_igmp_version',
      IgmpVersions.v3,
      'nf_call_iptables',
      EnableDisableToggle.Enable,
      'nf_call_ip6tables',
      EnableDisableToggle.Enable,
      'nf_call_arptables',
      EnableDisableToggle.Disable
    ],
    expectedCmdToExec: ` ip link add link eth0 name br0 type ${LinkTypes.Bridge} forward_delay 30 hello_time 10 max_age 40 stp_state ${EnableDisableToggle.Enable} priority 32768 mcast_igmp_version ${IgmpVersions.v3} nf_call_iptables ${EnableDisableToggle.Enable} nf_call_ip6tables ${EnableDisableToggle.Enable} nf_call_arptables ${EnableDisableToggle.Disable}`
  },
  {
    description      : 'with `type macsec`',
    options          : {
      link: 'eth0',
      name: 'macsec0',
      type: {
        [LinkTypes.Macsec]: {
          encrypt: OnOffToggle.On,
          sci    : '0102030405060708',
          cipher : 'gcm-aes-128',
          icvlen : 16
        }
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
      'macsec0',
      'type',
      LinkTypes.Macsec,
      'sci',
      '0102030405060708',
      'cipher',
      'gcm-aes-128',
      'icvlen',
      16,
      'encrypt',
      OnOffToggle.On
    ],
    expectedCmdToExec: ` ip link add link eth0 name macsec0 type ${LinkTypes.Macsec} sci 0102030405060708 cipher gcm-aes-128 icvlen 16 encrypt on`
  },
  {
    description      : 'with `type can`',
    options          : {
      name: 'can0',
      type: {
        [LinkTypes.Can]: {
          bitrate       : 500000,
          'sample-point': 0.875,
          'restart-ms'  : 100,
          'one-shot'    : OnOffToggle.Off
        }
      }
    },
    expectedCmd      : [
      '',
      'ip',
      'link',
      'add',
      'name',
      'can0',
      'type',
      LinkTypes.Can,
      'bitrate',
      500000,
      'sample-point',
      0.875,
      'one-shot',
      OnOffToggle.Off,
      'restart-ms',
      100
    ],
    expectedCmdToExec: ` ip link add name can0 type ${LinkTypes.Can} bitrate 500000 sample-point 0.875 one-shot ${ OnOffToggle.Off} restart-ms 100`
  }
];

export default Tests;