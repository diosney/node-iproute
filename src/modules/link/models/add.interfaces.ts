import { VirtualLinkTypes }     from './add.constants';
import { LinkVlanTypeOptions }  from './virtual-link-types/vlan.interfaces';
import { LinkVxlanTypeOptions } from './virtual-link-types/vxlan.interfaces';

export interface LinkAddOptions {
  /** Specifies the physical device to act operate on. */
  link?: string;
  /** Specifies the name of the new virtual device. */
  name: string;
  /** Specifies the type of the new device. */
  txqueuelen?: number;
  /**
   * Specifies the device Link Layer Address (LLADDR) parameter,
   * commonly known as mac address.
   */
  address?: string;
  /**
   * Specifies the device Link Layer Address (LLADDR) broadcast,
   * for the already specified mac address.
   */
  broadcast?: string;
  /** Specifies the Maximum Transmission Unit (mtu). */
  mtu?: number;
  /**
   * Specifies the desired index of the new virtual device.
   * The link creation fails, if the index is busy.
   */
  index?: number;
  /** Specifies the number of transmit queues for new device. */
  numtxqueues?: number;
  /** Specifies the number of receive queues for new device. */
  numrxqueues?: number;
  /**
   * Specifies the recommended maximum size of a Generic Segment Offload
   * packet the new device should accept.
   */
  gso_max_size?: number;
  /**
   * Specifies the recommended maximum number of a Generic Segment
   * Offload segments the new device should accept.
   */
  gso_max_segs?: number;
  /** Specifies the type of the new device. */
  type: VirtualLinkTypes;
  /** Specifies the additional arguments related to the specified virtual link type. */
  type_args: LinkVlanTypeOptions
    | LinkVxlanTypeOptions;
}
