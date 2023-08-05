/** Is used to configure IPv6 address generation mode for a given interface. */
export enum AddrGenMode {
  /** Use a Modified EUI-64 format interface identifier. */
  Eui64        = 'eui64',
  /** Disable automatic address generation. */
  None         = 'none',
  /**
   * Generate the interface identifier based on a preset
   * `/proc/sys/net/ipv6/conf/{default,DEVICE}/stable_secret`.
   */
  StableSecret = 'stable_secret',
  /** Like {@link StableSecret}, but auto-generate a new random secret if none is set. */
  Random       = 'random'
}

export enum BridgeSlavePortStates {
  Disabled   = 0,
  Listening  = 1,
  Learning   = 2,
  Forwarding = 3,
  Blocking   = 4,
}