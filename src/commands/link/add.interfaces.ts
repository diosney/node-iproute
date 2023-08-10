import { VirtualLinkTypes }               from '../link.constants';
import { SetLinkBondSlaveTypeArgs }       from './extended-virtual-link-types/bond-slave.interfaces';
import { SetLinkBridgeSlaveTypeArgs }     from './extended-virtual-link-types/bridge-slave.interfaces';
import { AddLinkBareudpTypeArgs }         from './virtual-link-types/bareup.interfaces';
import { AddLinkBridgeTypeArgs }          from './virtual-link-types/bridge.interfaces';
import { AddLinkErspanIp6erspanTypeArgs } from './virtual-link-types/erspan-ip6erspan.interfaces';
import { AddLinkGeneveTypeArgs }          from './virtual-link-types/geneve.interfaces';
import { AddLinkGreGretapTypeArgs }       from './virtual-link-types/gre-gretap.interfaces';
import { AddLinkHsrTypeArgs }             from './virtual-link-types/hsr.interfaces';
import { AddLinkIp6GreIp6gretapTypeArgs } from './virtual-link-types/ip6gre-ip6gretap.interfaces';
import { AddLinkIpipSitTypeArgs }         from './virtual-link-types/ipip-sit.interfaces';
import { AddLinkIpoibTypeArgs }           from './virtual-link-types/ipoib.interfaces';
import { AddLinkMacsecTypeArgs }          from './virtual-link-types/macsec.interfaces';

import {
  AddLinkMacvlanMacvtapTypeArgs,
  SetLinkMacvlanMacvtapTypeArgs
} from './virtual-link-types/macvlan-macvtap.interfaces';

import { AddLinkRmnetTypeArgs }     from './virtual-link-types/rmnet.interfaces';
import { AddLinkVethVxcanTypeArgs } from './virtual-link-types/veth-vxcan.interfaces';
import { AddLinkVlanTypeArgs }      from './virtual-link-types/vlan.interfaces';
import { AddLinkVrfTypeArgs }       from './virtual-link-types/vrf.interfaces';
import { AddLinkVxlanTypeArgs }     from './virtual-link-types/vxlan.interfaces';
import { AddLinkXfrmTypeArgs }      from './virtual-link-types/xfrm.interfaces';

export interface LinkAddOptions {
  /** Specifies the physical device to act operate on. */
  link?: string;
  /** Specifies the name of the new virtual device. */
  name: string;
  /** The transmit queue length of the device. */
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
  type_: TypeArgs;
}

export type TypeArgs = AddLinkVlanTypeArgs
  | AddLinkVxlanTypeArgs
  | AddLinkVethVxcanTypeArgs
  | AddLinkIpipSitTypeArgs
  | AddLinkGreGretapTypeArgs
  | AddLinkIp6GreIp6gretapTypeArgs
  | AddLinkIpoibTypeArgs
  | AddLinkErspanIp6erspanTypeArgs
  | AddLinkGeneveTypeArgs
  | AddLinkBareudpTypeArgs
  | AddLinkMacvlanMacvtapTypeArgs
  | AddLinkHsrTypeArgs
  | AddLinkVrfTypeArgs
  | AddLinkRmnetTypeArgs
  | AddLinkXfrmTypeArgs
  | AddLinkBridgeTypeArgs
  | AddLinkMacsecTypeArgs;

export type ExtendedTypeArgs = SetLinkBridgeSlaveTypeArgs
  | SetLinkBondSlaveTypeArgs
  | SetLinkMacvlanMacvtapTypeArgs
  | TypeArgs;