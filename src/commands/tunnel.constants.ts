/**
 * Tunnel available modes.
 * @category Constants
 */
export enum TunnelModes {
  // IPv4
  Ipip   = 'ipip',
  Sit    = 'sit',
  Isatap = 'isatap',
  Gre    = 'gre',
  //
  // IPv6
  //
  Ip6ip6 = 'ip6ip6',
  Ipip6  = 'ipip6',
  Ip6gre = 'ip6gre',
  vti6   = 'vti6',
  Any    = 'any'
}

/**
 * Tunnel Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface TunnelInfo {
  // XXX
}