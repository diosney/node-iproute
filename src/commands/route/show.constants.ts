export enum RouteRoutingTables {
  /**
   * The `local` table is a special routing table containing high priority control routes for local
   * and broadcast addresses.
   */
  Local   = 'local',
  /** The `main` table is the normal routing table containing all non-policy routes.  */
  Main    = 'main',
  /**
   * The `default` table is empty.
   * It is reserved for some post-processing if no previous default rules selected the packet.
   */
  Default = 'default',
  All     = 'all',
  Cache   = 'cache'
}

export enum RoutingTableProtocols {
  /** The route was installed by the kernel during autoconfiguration. */
  Kernel   = 'kernel',
  /**
   * The route was installed during the bootup sequence.
   * If a routing daemon starts, it will purge all of them.
   */
  Boot     = 'boot',
  /**
   * The route was installed by the administrator to override dynamic routing.
   * Routing daemon will respect them and, probably, even advertise them to its peers.
   */
  Static   = 'static',
  /** The route was installed due to an ICMP redirect. */
  Redirect = 'redirect',
  /** The route was installed by Router Discovery protocol. */
  Ra       = 'ra'
}

export enum RoutingTableTypes {
  /** The route entry describes real paths to the destinations covered by the route prefix. */
  Unicast     = 'unicast',
  /**
   * Not implemented the destinations are anycast addresses assigned to this host.
   * They are mainly equivalent to local with one difference: such addresses are invalid
   * when used as the source address of any packet.
   */
  Anycast     = 'anycast',
  /**
   * The destinations are assigned to this host.
   * The packets are looped back and delivered locally.
   */
  Local       = 'local',
  /**
   * The destinations are broadcast addresses.
   * The packets are sent as link broadcasts.
   */
  Broadcast   = 'broadcast',
  /**
   * A special type used for multicast routing.
   * It is not present in normal routing tables.
   */
  Multicast   = 'multicast',
  /**
   * A special control route used together with policy rules.
   * If such a route is selected, lookup in this table is terminated pretending that no route was found.
   * Without policy routing it is equivalent to the absence of the route in the routing table.
   * The packets are dropped and the ICMP message net unreachable is generated.
   * The local senders get an ENETUNREACH error.
   */
  Throw       = 'throw',
  /**
   * These destinations are unreachable.
   * Packets are discarded and the ICMP message host unreachable is generated.
   * The local senders get an EHOSTUNREACH error.
   */
  Unreachable = 'unreachable',
  /**
   * These destinations are unreachable.
   * Packets are discarded and the ICMP message communication administratively prohibited is generated.
   * The local senders get an EACCES error.
   */
  Prohibit    = 'prohibit',
  /**
   * These destinations are unreachable.
   * Packets are discarded silently.
   * The local senders get an EINVAL error.
   */
  Blackhole   = 'blackhole',
  /**
   * A special NAT route.
   * Destinations covered by the prefix are considered to be dummy (or external) addresses which require translation
   * to real (or internal) ones before forwarding.
   * The addresses to translate to are selected with the attribute via.
   * Warning: Route NAT is no longer supported in Linux 2.6.
   */
  Nat         = 'nat'
}