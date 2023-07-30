import { VirtualLinkTypes }               from './add.constants';
import { LinkBareudpTypeOptions }         from './virtual-link-types/bareup.interfaces';
import { LinkBridgeTypeOptions }          from './virtual-link-types/bridge.interfaces';
import { LinkErspanIp6erspanTypeOptions } from './virtual-link-types/erspan-ip6erspan.interfaces';
import { LinkGeneveTypeOptions }          from './virtual-link-types/geneve.interfaces';
import { LinkGreGretapTypeOptions }       from './virtual-link-types/gre-gretap.interfaces';
import { LinkHsrTypeOptions }             from './virtual-link-types/hsr.interfaces';
import { LinkIp6GreIp6gretapTypeOptions } from './virtual-link-types/ip6gre-ip6gretap.interfaces';
import { LinkIpipSitTypeOptions }         from './virtual-link-types/ipip-sit.interfaces';
import { LinkIpoibTypeOptions }           from './virtual-link-types/ipoib.interfaces';
import { LinkMacvlanMacvtapTypeOptions }  from './virtual-link-types/macvlan-macvtap.interfaces';
import { LinkRmnetTypeOptions }           from './virtual-link-types/rmnet.interfaces';
import { LinkVethVxcanTypeOptions }       from './virtual-link-types/veth-vxcan.interfaces';
import { LinkVlanTypeOptions }            from './virtual-link-types/vlan.interfaces';
import { LinkVrfTypeOptions }             from './virtual-link-types/vrf.interfaces';
import { LinkVxlanTypeOptions }           from './virtual-link-types/vxlan.interfaces';
import { LinkXfrmTypeOptions }            from './virtual-link-types/xfrm.interfaces';

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
    | LinkVxlanTypeOptions
    | LinkVethVxcanTypeOptions
    | LinkIpipSitTypeOptions
    | LinkGreGretapTypeOptions
    | LinkIp6GreIp6gretapTypeOptions
    | LinkIpoibTypeOptions
    | LinkErspanIp6erspanTypeOptions
    | LinkGeneveTypeOptions
    | LinkBareudpTypeOptions
    | LinkMacvlanMacvtapTypeOptions
    | LinkHsrTypeOptions
    | LinkVrfTypeOptions
    | LinkRmnetTypeOptions
    | LinkXfrmTypeOptions
    | LinkBridgeTypeOptions;
}
