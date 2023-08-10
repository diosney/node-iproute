import { EnableDisableToggle } from '../../../common/constants/attribute-values';

import {
  IgmpVersions,
  MldVersions,
  MultiCastRouterOptions,
  VlanProtocols
} from '../../link.constants';

export interface AddLinkBridgeTypeArgs {
  /**
   * Configure the bridge's FDB entries ageing time, ie the number of seconds a
   * MAC address will be kept in the FDB after a packet has been received from
   * that address.
   *
   * After this time has passed, entries are cleaned up.
   */
  ageing_time?: number;
  /**
   * Set the group forward mask.
   *
   * This is the bitmask that is applied to decide whether
   * to forward incoming frames destined to link-local addresses, ie addresses of the
   * form 01:80:C2:00:00:0X (defaults to `0`, ie the bridge does not forward any link-local frames).
   */
  group_fwd_mask?: number;
  /**
   * Set the MAC address of the multicast group this bridge uses for STP.
   * The address must be a link-local address in standard Ethernet MAC address format,
   * ie an address of the form 01:80:C2:00:00:0X, with X in [0, 4..f].
   */
  group_address?: string;
  /**
   * Set the forwarding delay in seconds, ie the time spent in LISTENING state (before moving to
   * LEARNING) and in LEARNING state (before moving to FORWARDING).
   *
   * Only relevant if STP is enabled. Valid values are between 2 and 30.
   */
  forward_delay?: number;
  /**
   * Set the time in seconds between hello packets sent by the bridge, when it is a root bridge
   * or a designated bridges.
   *
   * Only relevant if STP is enabled. Valid values are between 1 and 10.
   */
  hello_time?: number;
  /**
   * Set the hello packet timeout, ie the time in seconds until another bridge in the spanning
   * tree is assumed to be dead, after reception of its last hello message.
   *
   * Only relevant if STP is enabled. Valid values are between 6 and 40.
   */
  max_age?: number;
  /**  Turn spanning tree protocol on (STP_STATE > 0) or off (STP_STATE == 0) for this bridge. */
  stp_state?: EnableDisableToggle;
  /**
   * Set this bridge's spanning tree priority, used during STP root bridge election.
   *
   * PRIORITY is a 16bit unsigned integer.
   */
  priority?: number;
  /**
   * Turn VLAN filtering on (VLAN_FILTERING > 0) or off (VLAN_FILTERING == 0).
   *
   * When disabled, the bridge will not consider the VLAN tag when handling packets.
   */
  vlan_filtering?: EnableDisableToggle;
  /** Set the protocol used for VLAN filtering. */
  vlan_protocol?: VlanProtocols;
  /** Set the default PVID (native/untagged VLAN ID) for this bridge. */
  vlan_default_pvid?: number;
  /** Enable (VLAN_STATS_ENABLED == 1) or disable (VLAN_STATS_ENABLED == 0) per-VLAN stats accounting. */
  vlan_stats_enabled?: EnableDisableToggle;
  /**
   * Enable (VLAN_STATS_PER_PORT == 1) or disable (VLAN_STATS_PER_PORT == 0) per-VLAN per-port stats accounting.
   *
   * Can be changed only when there are no port VLANs configured.
   */
  vlan_stats_per_port?: EnableDisableToggle;
  /** Turn multicast snooping on (MULTICAST_SNOOPING > 0) or off (MULTICAST_SNOOPING == 0). */
  mcast_snooping?: EnableDisableToggle;
  /**
   * Set bridge's multicast router if IGMP snooping is enabled.
   *
   * MULTICAST_ROUTER is an integer value having the following meaning:
   * 0 - disabled.
   * 1 - automatic (queried).
   * 2 - permanently enabled.
   */
  mcast_router?: MultiCastRouterOptions;
  /**
   *  Whether to use the bridge's own IP address as source address for IGMP queries
   *  (MCAST_QUERY_USE_IFADDR > 0)
   *  or the default of 0.0.0.0 (MCAST_QUERY_USE_IFADDR == 0).
   */
  mcast_query_use_ifaddr?: EnableDisableToggle;
  /**
   * Enable (MULTICAST_QUERIER > 0) or disable (MULTICAST_QUERIER == 0) IGMP querier,
   * ie sending of multicast queries by the bridge (default: disabled).
   */
  mcast_querier?: EnableDisableToggle;
  /**
   * Set multicast database hash elasticity, ie the maximum chain length in the multicast
   * hash table (defaults to 4).
   */
  mcast_hash_elasticity?: number;
  /** Set maximum size of multicast hash table (defaults to 512, value must be a power of 2). */
  mcast_hash_max?: number;
  /**
   * Set multicast last member count, ie the number of queries the bridge will send before stopping
   * forwarding a multicast group after a "leave" message has been received (defaults to 2).
   */
  mcast_last_member_count?: number;
  /** Set the number of IGMP queries to send during startup phase (defaults to 2). */
  mcast_startup_query_count?: number;
  /** Interval between queries to find remaining members of a group, after a "leave" message is received. */
  mcast_last_member_interval?: number;
  /** Delay after which the bridge will leave a group, if no membership reports for this group are received. */
  mcast_membership_interval?: number;
  /**
   * Interval between queries sent by other routers. if no queries are seen after this delay has passed,
   * the bridge will start to send its own queries (as if mcast_querier was enabled).
   */
  mcast_querier_interval?: number;
  /** Interval between queries sent by the bridge after the end of the startup phase. */
  mcast_query_interval?: number;
  /** Set the Max Response Time/Maximum Response Delay for IGMP/MLD queries sent by the bridge. */
  mcast_query_response_interval?: number;
  /** Interval between queries in the startup phase. */
  mcast_startup_query_interval?: number;
  /** Enable  (MCAST_STATS_ENABLED > 0) or disable (MCAST_STATS_ENABLED == 0) multicast (IGMP/MLD) stats accounting. */
  mcast_stats_enabled?: EnableDisableToggle;
  /** Set the IGMP version. */
  mcast_igmp_version?: IgmpVersions;
  /** Set the MLD version. */
  mcast_mld_version?: MldVersions;
  /** Enable (NF_CALL_IPTABLES > 0) or disable (NF_CALL_IPTABLES == 0) iptables hooks on the bridge. */
  nf_call_iptables?: EnableDisableToggle;
  /** Enable (NF_CALL_IP6TABLES > 0) or disable (NF_CALL_IP6TABLES == 0) ip6tables hooks on the bridge. */
  nf_call_ip6tables?: EnableDisableToggle;
  /** Enable (NF_CALL_ARPTABLES > 0) or disable (NF_CALL_ARPTABLES == 0) arptables hooks on the bridge. */
  nf_call_arptables?: EnableDisableToggle;
}
