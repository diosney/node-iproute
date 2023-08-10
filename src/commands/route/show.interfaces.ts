import { AddressScopes } from '../address.constants';

import {
  RouteRoutingTables,
  RoutingTableProtocols,
  RoutingTableTypes
} from './show.constants';

export interface RouteShowOptions {
  /**
   * Only select routes from the given range of destinations.
   * SELECTOR consists of an optional modifier ({@link root}, {@link match} or {@link exact}) and a prefix.
   *
   * {@link root} PREFIX selects routes with prefixes not shorter than PREFIX.
   * F.e.  `root 0/0` selects the entire routing table.
   *
   * {@link match} PREFIX selects routes with prefixes not longer than PREFIX.
   * F.e.  `match 10.0/16` selects 10.0/16, 10/8 and 0/0, but it does not select 10.1/16 and 10.0.0/24.
   *
   * And {@link exact} PREFIX (or just PREFIX) selects routes with this exact prefix.
   *
   * If neither of these options are present, ip assumes `root 0/0` i.e. it lists the entire table.
   *
   * Special values: `all` and `default`.
   */
  to?: string;
  /** @see {@link to} */
  root?: string;
  /** @see {@link to} */
  match?: string;
  /** @see {@link to} */
  exact?: string;
  /** Only select routes with the given TOS. */
  tos?: number;
  dsfield?: number;
  /**
   * Show the routes from this table(s).
   * The default setting is to show table main.
   * TABLEID may either be the ID of a real table or one of the special values {@link RouteRoutingTables} .
   */
  table?: number | RouteRoutingTables;
  /** Show the routes for the table associated with the vrf name. */
  vrf?: string;
  /**
   * List cloned routes i.e. routes which were dynamically forked from other routes because some route
   * attribute (f.e. MTU) was updated.
   *
   * Actually, it is equivalent to table cache.
   */
  cloned?: true;
  cached?: true;
  /**
   * The same syntax as for {@link to}, but it binds the source address range rather than destinations.
   * Note that the `from` option only works with cloned routes.
   */
  from?: string;
  /** Only list routes of this protocol. */
  protocol?: RoutingTableProtocols | number;
  proto?: RoutingTableProtocols | number;
  /** The type of this rule. */
  type?: RoutingTableTypes;
  /**
   * The scope of the area where this address is valid.
   * The available scopes are listed in file `/etc/iproute2/rt_scopes`.
   */
  scope?: AddressScopes | number;
  /** The name of the device. */
  dev?: string;
  /** Only list routes going via the nexthop routers selected by PREFIX. */
  via?: string;
  /** Only list routes with preferred source addresses selected by PREFIX. */
  src?: string;
  /** Only list routes with this/these realms. */
  realm?: number;
  realms?: string;
}

// TODO: Need help to build this undocumented & comprehensive interface.
export interface RouteInfo {
  type: RoutingTableTypes;
  dst: RouteRoutingTables | string;
  gateway: string;
  dev: string;
  protocol: string | number;
  scope: AddressScopes;
  prefsrc: string;
  metric: number;
  flags: string[];

  table?: RouteRoutingTables | number;

  uid?: number;
  cache?: any[];
  users?: number;
  age?: number;
}
