import { TunnelModes } from '../tunnel.constants';

/**
 * Tunnel add options.
 * @category Interfaces
 */
export interface TunnelAddOptions {
  /** Select the tunnel device name. */
  name?: string;
  /**
   * Set the tunnel mode.
   * Available modes depend on the encapsulating address family.
   */
  mode?: TunnelModes;
  /** Set the remote endpoint of the tunnel. */
  remote?: string;
  /**
   * Set the fixed local address for tunneled packets.
   * It must be an address on another interface of this host.
   */
  local?: string;
  /**
   * Serialize packets.
   * The `oseq` flag enables sequencing of outgoing packets.
   * The `iseq` flag requires that all input packets are serialized.
   * The `seq` flag is equivalent to the combination `iseq` `oseq`.
   *
   * Note: only GRE tunnels.
   */
  seq?: boolean;
  /** @see {@link seq} */
  iseq?: boolean;
  /** @see {@link seq} */
  oseq?: boolean;
  /**
   * Use keyed GRE with key `K`.
   * `K` is either a number or an IP address-like dotted quad.
   * The key parameter sets the key to use in both directions.
   * The `ikey` and `okey` parameters set different keys for input and output.
   *
   * Note: only GRE tunnels.
   */
  key?: number | string;
  /** @see {@link key} */
  ikey?: number | string;
  /** @see {@link key} */
  okey?: number | string;
  /**
   * Generate/require checksums for tunneled packets.
   * The `ocsum` flag calculates checksums for outgoing packets.
   * The `icsum` flag requires that all input packets have the correct checksum.
   * The `csum` flag is equivalent to the combination `icsum` `ocsum`.
   *
   * Note: only GRE tunnels.
   */
  csum?: boolean;
  /** @see {@link csum} */
  icsum?: boolean;
  /** @see {@link csum} */
  ocsum?: boolean;
  /**
   * Set a fixed encapsulation limit. Default is 4.
   * Note: only IPv6 tunnels.
   */
  encaplimit?: number | 'none';
  /**
   * Set a fixed TTL (IPv4) or hoplimit (IPv6) `N` on tunneled packets.
   * `N` is a number in the range 1-255.
   * `0` is a special value meaning that packets inherit the TTL value.
   * The default value for IPv4 tunnels is: `inherit`.
   * The default value for IPv6 tunnels is: `64`.
   */
  ttl?: number | 'inherit';
  /** @see {@link ttl} */
  hoplimit?:number | 'inherit';
  /**
   * Set the type of service (IPv4) or traffic class (IPv6) field on tunneled packets,
   * which can be specified as either a two-digit hex value (e.g. `c0`) or a predefined string (e.g. `internet`).
   * The value inherit causes the field to be copied from the original IP header.
   * The values `inherit/STRING` or `inherit/00..ff` will set the field to STRING or` 00..ff`
   * when tunneling non-IP packets.
   *
   * The default value is `00`.
   */
  tos?: string;
  /** @see {@link tos} */
  dsfield?: string;
  /** @see {@link tos} */
  tclass?: string;
  /**
   * Set a fixed flowlabel.
   * Note: only IPv6 tunnels.
   */
  flowlabel?: string;
  /** XXX. */
  pmtudisc?: true;
  /**
   * Disable Path MTU Discovery on this tunnel.
   * It is enabled by default.
   * Note that a fixed ttl is incompatible with this option: tunneling with a fixed ttl always makes pmtu discovery.
   *
   * @see {@link pmtudisc} */
  nopmtudisc?: true;
  /**
   * Enable IPv4 DF suppression on this tunnel.
   * Normally datagrams that exceed the MTU will be fragmented; the presence of the DF flag inhibits this,
   * resulting instead in an ICMP Unreachable (Fragmentation Required) message.
   * Enabling this attribute causes the DF flag to be ignored.
   */
  'ignore-df'?: true;
  /** @see {@link['ignore-df']} */
  'noignore-df'?: true;
  /**
   * Allow remote endpoint on the local host.
   * Note: only IPv6 tunnels.
   */
  'allow-localremote'?: true;
  /** @see {@link['allow-localremote']} */
  'noallow-localremote'?: true;
  /**
   * Bind the tunnel to the device NAME so that tunneled packets will only be routed via this
   * device and will not be able to escape to another device when the route to endpoint changes.
   */
  dev?: string;
}