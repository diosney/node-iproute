/**
 * Tunnel prl options.
 * @category Interfaces
 */
export interface TunnelPrlOptions {
  /**
   * Bind the tunnel to the device NAME so that tunneled packets will only be routed via this
   * device and will not be able to escape to another device when the route to endpoint changes.
   */
  dev: string;
  /** Add or delete ADDR as a potential router or default router. */
  'prl-default'?: string;
  /** @see {@link['prl-default']} */
  'prl-nodefault'?: string;
  /** @see {@link['prl-default']} */
  'prl-delete'?: string;
}