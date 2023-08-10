import { DontFragmentFlagValues } from '../../link.constants';

export interface AddLinkGeneveTypeArgs {
  /** Specifies the Virtual Network Identifier to use. */
  id: number;
  /** Specifies the unicast destination IP address to use in outgoing packets. */
  remote: string;
  /**
   * Specifies the TTL value to use in outgoing packets.
   * "0" or "auto" means use whatever default value, "inherit" means inherit
   * the inner protocol's ttl.
   *
   * Default option is "0".
   */
  ttl?: number | string;
  /** Specifies the TOS value to use in outgoing packets. */
  tos?: number;
  /**
   * Specifies the usage of the Don't Fragment flag (DF) bit in outgoing packets with IPv4 headers.
   *
   * The value inherit causes the bit to be copied from the original IP header.
   * The values unset and set cause the bit to be always unset or always set, respectively.
   *
   * By default, the bit is not set.
   */
  df?: DontFragmentFlagValues;
  /** Specifies the flow label to use in outgoing packets. */
  flowlabel?: number;
  /** Select a destination port other than the default of 6081. */
  dstport?: number;
  /**
   * Make this tunnel externally controlled (or not, which is the default).
   * This flag is mutually exclusive with the {@link id}, {@link remote}, {@link ttl}, {@link tos} and
   * {@link flowlabel} options.
   */
  external?: boolean;
  /** @see {@link external} */
  noexternal?: boolean;
  /** Specifies if UDP checksum is calculated for transmitted packets over IPv4. */
  udpcsum?: boolean;
  /** @see {@link udpcsum} */
  noudpcsum?: boolean;
  /** Skip UDP checksum calculation for transmitted packets over IPv6. */
  udp6zerocsumtx?: boolean;
  /** @see {@link udp6zerocsumtx} */
  noudp6zerocsumtx?: boolean;
  /** Allow incoming UDP packets over IPv6 with zero checksum field. */
  udp6zerocsumrx?: boolean;
  /** @see {@link udp6zerocsumrx} */
  noudp6zerocsumrx?: boolean;
}