export interface LinkBareudpTypeOptions {
  /** Specifies the destination port for the UDP tunnel. */
  dstport: number;
  /**
   *  Specifies the `ethertype` of the L3 protocol being tunnelled.
   *  `ethertype` can be given as plain Ethernet protocol number or using the protocol name
   *  ("ipv4", "ipv6", "mpls_uc", etc.).
   *
   *  TODO: Add an enum with all known protocols numbers and names?
   *  @see https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml
   */
  ethertype: string | number;
  /** Selects the lowest value of the UDP tunnel source port range. */
  srcportmin?: number;
  /**
   *  Activates support for protocols similar to the one specified by {@link ethertype}.
   *  When {@link ethertype} is "mpls_uc" (that is, unicast MPLS), this allows the tunnel
   *  to also handle multicast MPLS.
   *
   *  When {@link ethertype} is "ipv4", this allows the tunnel to also handle IPv6.
   *  This option is disabled by default.
   */
  multiproto?: boolean;
  /** @see {@link multiproto} */
  nomultiproto?: boolean;
}