/**
 * Tunnel 6rd options.
 * @category Interfaces
 */
export interface Tunnel6rdOptions {
  /**
   * Bind the tunnel to the device NAME so that tunneled packets will only be routed via this
   * device and will not be able to escape to another device when the route to endpoint changes.
   */
  dev: string;
  /** XXX. */
  '6rd-prefix'?: string;
  /** XXX. */
  '6rd-relay_prefix'?: string;
  /** XXX. */
  '6rd-reset'?: true;
}