import { OnOffToggle }           from '../../../common/constants/attribute-values';
import { BridgeSlavePortStates } from '../../link.constants';

/**
 * Set link bridge-slave type args.
 * @category Interfaces
 */
export interface SetLinkBridgeSlaveTypeArgs {
  /** Flush bridge slave's fdb dynamic entries. */
  fdb_flush?: true;
  /** Set port state. */
  state?: BridgeSlavePortStates;
  /** Set port priority (allowed values are between 0 and 63, inclusively). */
  priority?: number;
  /** Set port cost (allowed values are between 1 and 65535, inclusively). */
  cost?: number;
  /** Block incoming BPDU packets on this port. */
  guard?: OnOffToggle;
  /**
   * Enable hairpin mode on this port.
   * This will allow incoming packets on this port to be reflected back.
   */
  hairpin?: OnOffToggle;
  /** Enable multicast fast leave on this port. */
  fastleave?: OnOffToggle;
  /** Block this port from becoming the bridge's root port. */
  root_block?: true;
  /** Allow MAC address learning on this port. */
  learning?: true;
  /**
   * Open the flood gates on this port, i.e. forward all unicast frames to this port also.
   * Requires {@link proxy_arp} and {@link proxy_arp_wifi} to be turned off.
   */
  flood?: true;
  /** Enable proxy ARP on this port. */
  proxy_arp?: true;
  /** Enable proxy ARP on this port which meets extended requirements by IEEE 802.11 and Hotspot 2.0 specifications. */
  proxy_arp_wifi?: true;
  /**
   * Configure this port for having multicast routers attached.
   * A port with a multicast router will receive all multicast traffic.
   * MULTICAST_ROUTER may be either 0 to disable multicast routers on this port, 1 to let the system detect
   * the presence of routers (this is the default), 2 to permanently enable multicast traffic forwarding on
   * this port or 3 to enable multicast routers temporarily on this port, not depending on incoming queries.
   */
  mcast_router?: number;
  /** This is a synonym to the fastleave option above. */
  mcast_fast_leave?: OnOffToggle;
  /** Controls whether a given port will flood multicast traffic for which there is no MDB entry. */
  mcast_flood?: OnOffToggle;
  /**
   * Controls whether a given port will replicate packets using unicast instead of multicast.
   * By default this flag is off.
   */
  mcast_to_unicast?: OnOffToggle;
  /**
   * Set the group forward mask.
   * This is the bitmask that is applied to decide whether to forward incoming frames destined to link-local addresses,
   * ie addresses of the form 01:80:C2:00:00:0X (defaults to 0, ie the bridge does not forward any link-local frames
   * coming on this port).
   */
  group_fwd_mask?: number;
  /**
   * Controls whether neigh discovery (arp and nd) proxy and suppression is enabled on the port.
   * By default this flag is off.
   */
  neigh_suppress?: OnOffToggle;
  /**
   * Controls whether vlan to tunnel mapping is enabled on the port.
   * By default this flag is off.
   */
  vlan_tunnel?: OnOffToggle;
  // /** TODO: It didn't have the documentation. */
  isolated?: OnOffToggle;
  /** If the port loses carrier all traffic will be redirected to the configured backup port */
  backup_port?: string;
  /** Removes the currently configured backup port. */
  nobackup_port?: true;
}