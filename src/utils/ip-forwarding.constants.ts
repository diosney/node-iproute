/**
 * Sysctl actions.
 *
 * @category Constants
 * @internal
 */
export enum SysctlActions {
  Enable  = 'enable',
  Disable = 'disable',
  Status  = 'status'
}

/**
 * Sysctl paths.
 *
 * @category Constants
 * @internal
 */
export enum SysctlPaths {
  Ipv4Forwarding = 'net.ipv4.ip_forward',
  Ipv6Forwarding = 'net.ipv6.conf.all.forwarding'
}