import { TunTapTunnelAddOptions } from './add.interfaces';

/**
 * Tunnel show options.
 * @category Interfaces
 */
export type TunTapTunnelShowOptions = Partial<Pick<TunTapTunnelAddOptions, 'mode'>> & Omit<TunTapTunnelAddOptions, 'mode'>;

/**
 * Tunnel Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface TunTapTunnelInfo {
  ifname: string;
  flags: string[];
  // XXX
  processes: Array<any>;
}