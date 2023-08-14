import { RoutingTables, RuleTypes } from '../rule.constants';

export interface RuleShowOptions {
  /** The type of this rule. */
  type?: RuleTypes;
  /** Invert the rule. */
  not?: true;
  /** Select the source prefix to match. */
  from?: string;
  /** Select the destination prefix to match. */
  to?: string;
  /** Select the TOS value to match. */
  tos?: number;
  /** Select the fwmark value to match. */
  fwmark?: string;
  /**
   * Select the incoming device to match.
   *
   * If the interface is loopback, the rule only matches packets originating from this host.
   * This means that you may create separate routing tables for forwarded and local packets and, hence,
   * completely segregate them.
   */
  iif?: string;
  /**
   * Sselect the outgoing device to match.
   * The outgoing interface is only available  for packets originating from local sockets that are bound to a device.
   */
  oif?: string;
  /**
   * The priority of this rule.
   *
   * PREFERENCE is an unsigned integer value, higher number means lower priority, and rules get processed in
   * order of increasing number.
   *
   * Each rule should have an explicitly set unique priority value.  The options preference and order are synonyms
   * with priority.
   */
  preference?: number;
  /** Pertains to layer 3 master device-based routing, particularly relevant when using Virtual Routing and Forwarding (VRF) tables. */
  l3mdev?: true;
  /** Select the uid value to match. */
  uidrange?: string;
  /** Select the ip protocol value to match. */
  ipproto?: string | number;
  /**
   * Select the source port value to match.
   * Supports port range.
   */
  sport?: string | number;
  /**
   * Select the destination port value to match.
   * Supports port range.
   */
  dport?: string | number;
  /**
   *  Attribute is used to match packets based on their tunnel ID, typically relevant for
   *  VXLAN (Virtual eXtensible Local Area Network) or other tunneling protocols that utilize tunnel IDs.
   *  The tunnel ID helps identify individual tunnels in scenarios where multiple tunnels are used.
   */
  tun_id?: number;
}

// TODO: Need help to build this undocumented & comprehensive interface.
export interface RuleInfo {
  priority: number;
  src: string;
  table: RoutingTables | string;
  protocol: string | number;
}