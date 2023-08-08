import { RuleRoutingTables, RuleTypes } from './add.constants';

export interface RuleAddOptions {
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
  dsfield?: number;
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
   * The priority of this rule.
   *
   * PREFERENCE is an unsigned integer value, higher number means lower priority, and rules get processed in
   * order of increasing number.
   *
   * Each rule should have an explicitly set unique priority value.  The options preference and order are synonyms
   * with priority.
   */
  priority?: number;
  pref?: number;
  /**
   *  Attribute is used to match packets based on their tunnel ID, typically relevant for
   *  VXLAN (Virtual eXtensible Local Area Network) or other tunneling protocols that utilize tunnel IDs.
   *  The tunnel ID helps identify individual tunnels in scenarios where multiple tunnels are used.
   */
  tun_id?: number;
  /**
   * The routing table identifier to lookup if the rule selector matches.
   * It is also possible to use lookup instead of table.
   */
  table?: number | RuleRoutingTables;
  lookup?: number | RuleRoutingTables;
  /**
   * The routing protocol who installed the rule in question.
   * As an example when zebra installs a rule it would get RTPROT_ZEBRA as the installing protocol.
   */
  protocol?: string | number;
  /**
   * The base of the IP address block to translate (for source addresses).
   * The ADDRESS may be either the start of the block of NAT addresses (selected by NAT routes) or a local host
   * address (or even zero).
   *
   * In the last case the router does not translate the packets, but masquerades them to this address.
   * Using `map-to` instead of `nat` means the same thing.
   */
  nat?: string;
  'map-to'?: string;
  /**
   * Realms to select if the rule matched and the routing table lookup succeeded.
   * Realm TO is only used if the route did not select any realm.
   */
  realms?: string;
  /**
   * Attribute is used to jump to a rule with a specified priority.
   * It essentially alters the typical sequence in which rules are evaluated.
   */
  goto?: number;
  /** Reject routing decisions that have a prefix length of NUMBER or less. */
  suppress_prefixlength?: number;
  /** Reject routing decisions that use a device belonging to the interface group GROUP. */
  suppress_ifgroup?: number;
}