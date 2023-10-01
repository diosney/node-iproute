import { TunTapTunnelModes } from '../tuntap.constants';

/**
 * Tunnel add options.
 * @category Interfaces
 */
export interface TunTapTunnelAddOptions {
  /** The physical device to attach this tunnel to. */
  dev?: string;
  /** Set the tunnel mode. */
  mode: TunTapTunnelModes;
  /** XXX */
  user?: string | number;
  /** XXX */
  group?: string | number;
  /** XXX */
  one_queue?: true;
  /** XXX */
  pi?: true;
  /** XXX */
  vnet_hdr?: true;
  /** XXX */
  multi_queue?: true;
  /** XXX */
  name?: string;
}