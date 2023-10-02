import { RouteRoutingTables } from '../route/show.constants';

/**
 * Mroute show options.
 * @category Interfaces
 */
export interface MrouteShowOptions {
  /** The prefix selecting the destination multicast addresses to list. */
  to?: string;
  /** The prefix selecting the IP source addresses of the multicast route. */
  from?: string;
  /** The interface on which multicast packets are received. */
  iif?: string;
  /**
   * The table id selecting the multicast table.
   * It can be `local`, `main`, `default`, `all` or a number.
   */
  table?: number | RouteRoutingTables;
}

/**
 * Mroute Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface MrouteInfo {
}