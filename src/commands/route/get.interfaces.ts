/**
 * Route get options.
 * @category Interfaces
 */
export interface RouteGetOptions {
  /**
   * Return full `fib` lookup matched route.
   * Default is to return the resolved `dst` entry.
   */
  fibmatch?: true;
  /** The destination address. */
  to?: string;
  /** The source address. */
  from?: string;
  /** The device from which this packet is expected to arrive. */
  iif?: string;
  /** Force the output device on which this packet will be routed. */
  oif?: string;
  /** The firewall mark (fwmark). */
  mark?: string;
  /** Only select routes with the given TOS. */
  tos?: number;
  /** Force the `vrf` device on which this packet will be routed. */
  vrf?: string;
  /** IP protocol as seen by the route lookup. */
  ipproto?: string | number;
  /** Source port as seen by the route lookup. */
  sport?: number;
  /** Destination port as seen by the route lookup. */
  dport?: number;
  /**
   * If no source address (option from) was given, relookup the route with the source set to the
   * preferred address received from the first lookup.
   * If policy routing is used, it may be a different route.
   */
  connected?: true;
}