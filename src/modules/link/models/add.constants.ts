/** Link Virtual Types. */
export enum VirtualLinkTypes {
  /** Ethernet Bridge device. */
  Bridge    = 'bridge',
  /** Bonding device. */
  Bond      = 'bond',
  /** Dummy network interface. */
  Dummy     = 'dummy',
  /** High-availability Seamless Redundancy device. */
  Hsr       = 'hsr',
  /** Intermediate Functional Block device. */
  Ifb       = 'ifb',
  /** IP over Infiniband device. */
  Ipoib     = 'ipoib',
  /** Virtual interface base on link layer address (MAC). */
  Macvlan   = 'macvlan',
  /** Virtual interface based on link layer address (MAC) and TAP. */
  Macvtap   = 'macvtap',
  /** Virtual Controller Area Network interface. */
  Vcan      = 'vcan',
  /** Virtual Controller Area Network tunnel interface. */
  Vxcan     = 'vxcan',
  /** Virtual ethernet interface. */
  Veth      = 'veth',
  /** 802.1q tagged virtual LAN interface. */
  Vlan      = 'vlan',
  /** Virtual eXtended LAN. */
  Vxlan     = 'vxlan',
  /** Virtual tunnel interface IPv4|IPv6 over IPv6. */
  Ip6tnl    = 'ip6tnl',
  /** Virtual tunnel interface IPv4 over IPv4. */
  Ipip      = 'ipip',
  /** Virtual tunnel interface IPv6 over IPv4. */
  Sit       = 'sit',
  /** Virtual tunnel interface GRE over IPv4. */
  Gre       = 'gre',
  /** Virtual L2 tunnel interface GRE over IPv4. */
  Gretap    = 'gretap',
  /** Encapsulated Remote SPAN over GRE and IPv4. */
  Erspan    = 'erspan',
  /** Virtual tunnel interface GRE over IPv6. */
  Ip6gre    = 'ip6gre',
  /** Virtual L2 tunnel interface GRE over IPv6. */
  Ip6gretap = 'ip6gretap',
  /** Encapsulated Remote SPAN over GRE and IPv6. */
  Ip6erspan = 'ip6erspan',
  /** Virtual tunnel interface. */
  Vti       = 'vti',
  /** Netlink monitoring device. */
  Nlmon     = 'nlmon',
  /** Interface for L3 (IPv6/IPv4) based VLANs. */
  Ipvlan    = 'ipvlan',
  /** Interface for L3 (IPv6/IPv4) based VLANs and TAP. */
  Ipvtap    = 'ipvtap',
  /** Interface for 6LoWPAN (IPv6) over IEEE 802.15.4 Bluetooth. */
  Lowpan    = 'lowpan',
  /** GEneric NEtwork Virtualization Encapsulation. */
  Geneve    = 'geneve',
  /** Bare UDP L3 encapsulation support. */
  Bareudp   = 'bareudp',
  /** Interface for IEEE 802.1AE MAC Security (MAC‐sec). */
  Macsec    = 'macsec',
  /** Interface for L3 VRF domains. */
  Vrf       = 'vrf',
  /** Interface for netdev API tests. */
  Netdevsim = 'netdevsim',
  /** Qualcomm rmnet device. */
  Rmnet     = 'rmnet',
  /** Virtual xfrm interface. */
  Xfrm      = 'xfrm',
}

export enum VlanProtocols {
  '802.1Q'  = '802.1Q',
  '802.1ad' = '802.1ad'
}

export enum DontFragmentFlagValues {
  /** Causes the bit to be copied from the original IP header. */
  Inherit = 'inherit',
  /** Cause the bit to be always unset. */
  Unset   = 'unset',
  /** Cause the bit to be always set. */
  Set     = 'set'
}

/**
 * Specifies type of secondary UDP encapsulation.
 */
export enum SecondaryUdpEncapsulations {
  /** Indicates Foo-Over-UDP. */
  Fou  = 'fou',
  /** Indicates Generic UDP Encapsulation. */
  Gue  = 'gue',
  None = 'none',
}

/** Specifies mode in which device should run. */
// TODO: Separate interfaces?
export enum IpipSipDeviceModes {
  /** Indicates IPv6-Over-IPv4 */
  Ip6ip  = 'ip6ip',
  /** Indicates "IPv4-Over-IPv4". */
  Ipip   = 'ipip',
  /** Indicates MPLS-Over-IPv4. */
  Mplsip = 'mplsip',
  /** Indicates IPv6, IPv4 or MPLS Over IPv4. */
  Any    = 'any',
}

/** Specifies whether the link should be in datagram mode or connected mode. */
export enum IpoIbModes {
  /**
   * This is the default mode. In datagram mode, packets are sent independently of each other,
   * without a connection between sender and receiver.
   * */
  Datagram  = 'datagram',
  /**
   * In connected mode, a reliable connection is established before data is exchanged, which can
   * offer higher throughput and lower latency in some situations. However, connected mode uses more
   * resources and may not be supported by all InfiniBand hardware.
   */
  Connected = 'connected',
}

/** Specifies the ERSPAN v2 mirrored traffic's direction. */
export enum ErspanDirections {
  Ingress = 'ingress',
  Egress  = 'egress',
}