import { IpipSipDeviceModes, SecondaryUdpEncapsulations } from '../../link.constants';

/**
 * Add link IPIP & Sit type arguments.
 * @category Interfaces
 */
export interface AddLinkIpipSitTypeArgs {
  /** Specifies the remote address of the tunnel. */
  remote: string;
  /**
   * Specifies the fixed local address for tunneled packets.
   * It must be an address on another interface on this host.
   */
  local: string;
  /** @see {@link SecondaryUdpEncapsulations} */
  encap?: SecondaryUdpEncapsulations;
  /**
   * Specifies the source port in UDP encapsulation.
   *
   * PORT indicates the port by number, "auto" indicates that the port number
   * should be chosen automatically (the kernel picks a flow based on the flow
   * hash of the encapsulated packet).
   */
  'encap-sport'?: number | 'auto';
  /** TODO: No doc in man. */
  'encap-dport'?: number ;
  /** Specifies if UDP checksums are enabled in the secondary encapsulation. */
  'encap-csum'?: boolean;
  /** @see {@link['encap-csum']} */
  'noencap-csum'?: boolean;
  /**
   * Specifies if Remote Checksum Offload is enabled.
   * This is only applicable for Generic UDP Encapsulation.
   */
  'encap-remcsum'?: boolean;
  /** @see {@link['encap-remcsum']} */
  'noencap-remcsum'?: boolean;
  /**
   * Specifies mode in which device should run.
   *
   * "ip6ip" indicates IPv6-Over-IPv4,
   * "ipip" indicates "IPv4-Over-IPv4",
   * "mplsip" indicates MPLS-Over-IPv4,
   * "any" indicates IPv6, IPv4 or MPLS Over IPv4.
   *
   * Supported for SIT where the default is "ip6ip" and IPIP where the default is "ipip".
   * IPv6-Over-IPv4 is not supported for IPIP.
   */
  // TODO: Separate interfaces and validations between IPIP & SIT? They don't support the same types.
  mode?: IpipSipDeviceModes;
  /** Make this tunnel externally controlled (e.g. ip route encap). */
  external?: true;
}