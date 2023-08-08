export enum RuleRoutingTables {
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
}

export enum RuleTypes {
  /** The rule prescribes to return the route found in the routing table referenced by the rule. */
  Unicast     = 'unicast',
  /** The rule prescribes to silently drop the packet. */
  Blackhole   = 'blackhole',
  /** The rule prescribes to generate a 'Network is unreachable' error. */
  Unreachable = 'unreachable',
  /** The rule prescribes to generate 'Communication is administratively prohibited' error. */
  Prohibit    = 'prohibit',
  /** The rule prescribes to translate the source address of the IP packet into some other value. */
  Nat         = 'nat'
}