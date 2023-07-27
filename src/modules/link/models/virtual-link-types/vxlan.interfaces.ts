import { DontFragmentFlagValues } from '../add.constants';

export interface LinkVxlanTypeOptions {
  /** Specifies the VXLAN Network Identifier (or VXLAN Segment Identifier) to use. */
  id: number;
  /** Specifies the physical device to use for tunnel endpoint communication. */
  dev?: string;
  /**
   * Specifies the multicast IP address to join.
   * This parameter cannot be specified with the remote parameter.
   */
  group?: string;
  /**
   * Specifies the unicast destination IP address to use in outgoing packets
   * when the destination link layer address is not known in the VXLAN device
   * forwarding database.
   *
   * This parameter cannot be specified with the group parameter.
   */
  remote?: string;
  /** Specifies the source IP address to use in outgoing packets. */
  local?: string;
  /** Specifies the TTL value to use in outgoing packets. */
  ttl?: number;
  /** Specifies the TOS value to use in outgoing packets. */
  tos?: number;
  /**
   * Specifies the usage of the Don't Fragment flag (DF) bit in outgoing packets
   * with IPv4 headers.
   *
   * The value {@link DontFragmentFlagValues.Inherit} causes the bit to be copied from the original IP header.
   * The values {@link DontFragmentFlagValues.Unset} and {@link DontFragmentFlagValues.Set} cause the bit to be always unset or always set, respectively.
   * By default, the bit is not set.
   */
  df?: DontFragmentFlagValues;
  /** Specifies the flow label to use in outgoing packets. */
  flowlabel?: number;
  /** Specifies the UDP destination port to communicate to the remote VXLAN tunnel endpoint. */
  dstport?: number;
  /**
   * Specifies the range of port numbers to use as UDP source ports to communicate
   * to the remote VXLAN tunnel endpoint.
   *
   * Format: [min, max]
   */
  srcport?: [number, number];
  /**
   * Specifies if unknown source link layer addresses and IP addresses are
   * entered into the VXLAN device forwarding database.
   *
   * @see {@link nolearning}
   */
  learning?: boolean;
  /**
   * Specifies if unknown source link layer addresses and IP addresses are
   * entered into the VXLAN device forwarding database.
   *
   * @see {@link learning}
   */
  nolearning?: boolean;
  /**
   * Specifies if route short circuit is turned on.
   * @see {@link norsc}
   */
  rsc?: boolean;
  /**
   * Specifies if route short circuit is turned on.
   * @see {@link rsc}
   */
  norsc?: boolean;
  /**
   * Specifies if ARP proxy is turned on.
   * @see {@link noproxy}
   */
  proxy?: boolean;
  /**
   * Specifies if ARP proxy is turned on.
   * @see {@link proxy}
   */
  noproxy?: boolean;
  /**
   * Specifies if netlink LLADDR miss notifications are generated.
   * @see {@link nol2miss}
   */
  l2miss?: boolean;
  /**
   * Specifies if netlink LLADDR miss notifications are generated.
   * @see {@link l2miss}
   */
  nol2miss?: boolean;
  /**
   * Specifies if netlink IP ADDR miss notifications are generated.
   * @see {@link nol3miss}
   */
  l3miss?: boolean;
  /**
   * Specifies if netlink IP ADDR miss notifications are generated.
   * @see {@link l3miss}
   */
  nol3miss?: boolean;
  /**
   * Specifies if UDP checksum is calculated for transmitted packets over IPv4.
   * @see {@link noudpcsum}
   */
  udpcsum?: boolean;
  /**
   * Specifies if UDP checksum is calculated for transmitted packets over IPv4.
   * @see {@link udpcsum}
   */
  noudpcsum?: boolean;
  /**
   * Skip UDP checksum calculation for transmitted packets over IPv6.
   * @see {@link noudp6zerocsumtx}
   */
  udp6zerocsumtx?: boolean;
  /**
   * Skip UDP checksum calculation for transmitted packets over IPv6.
   * @see {@link udp6zerocsumtx}
   */
  noudp6zerocsumtx?: boolean;
  /**
   * Allow incoming UDP packets over IPv6 with zero checksum field.
   * @see {@link noudp6zerocsumrx}
   */
  udp6zerocsumrx?: boolean;
  /**
   * Allow incoming UDP packets over IPv6 with zero checksum field.
   * @see {@link udp6zerocsumrx}
   */
  noudp6zerocsumrx?: boolean;
  /** Specifies the lifetime in seconds of FDB entries learned by the kernel. */
  ageing?: number;
  /** Specifies the maximum number of FDB entries. */
  maxaddress?: number;
  /**
   * Specifies whether an external control plane (e.g., ip route encap) or the internal FDB should be used.
   * @see {@link noexternal}
   */
  external?: boolean;
  /**
   * Specifies whether an external control plane (e.g., ip route encap) or the internal FDB should be used.
   * @see {@link external}
   */
  noexternal?: boolean;
  /** Enables the Group Policy extension (VXLAN-GBP). */
  gbp?: boolean;
  /**
   * Enables the Generic Protocol extension (VXLAN-GPE).
   * Currently, this is only supported together with the external keyword.
   */
  gpe?: boolean;
}
