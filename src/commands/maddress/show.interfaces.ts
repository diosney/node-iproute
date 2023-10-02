import { AddressFamilies } from '../address.constants';

/**
 * Maddress show options.
 * @category Interfaces
 */
export interface MaddressShowOptions {
  /** The device to join/leave this multicast address. */
  dev?: string;
}

/**
 * Maddress Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface MaddressInfo {
  ifindex: number;
  ifname: string;
  maddr: Array<{
    family?: AddressFamilies;
    address?: string;
    link?: string;
    users?: number;
  }>;
}