import { RoutingTables } from '../rule.constants';
import { RuleShowOptions }          from './show.interfaces';

export interface RuleAddOptions extends RuleShowOptions {
  /**
   * The routing table identifier to lookup if the rule selector matches.
   * It is also possible to use lookup instead of table.
   */
  table?: number | RoutingTables;
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