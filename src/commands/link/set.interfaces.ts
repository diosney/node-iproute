import {
  EnableDisableAutoToggle,
  OnOffToggle
} from '../../common/constants/attribute-values';

import {
  AddrGenMode,
  ExtendedLinkTypes,
  VlanProtocols, XdpOptionTypes
} from '../link.constants';

import { LinkSetXdpObjectOptions } from './xdp-options/object.interfaces';
import { LinkSetXdpPinnedOptions } from './xdp-options/pinned.interfaces';
import { LinkSetXdpOffOptions } from './xdp-options/off.interfaces';
import { ExtendedLinkTypesMappings } from './add.interfaces';

/**
 * Link set common options.
 *
 * @category Interfaces
 * @internal
 */
export interface LinkSetCommonOptions {
  /** Change the state of the device to UP. */
  up?: true;
  /** Change the state of the device to DOWN. */
  down?: true;
  /**
   * Change type-specific settings.
   *
   * For a list of supported types and arguments refer to {@link LinkAddOptions.type}.
   * In addition to that, it is possible to manipulate settings to slave devices type.
   *
   * @see {@link ExtendedLinkTypes}
   */
  type?: {
    [key in ExtendedLinkTypes]?: ExtendedLinkTypesMappings[key];
  };
  /** Change the NOARP flag on the device. */
  arp?: OnOffToggle;
  /**
   * Change the DYNAMIC flag on the device.
   * Indicates that address can change when interface goes down (currently NOT used by the Linux).
   */
  dynamic?: OnOffToggle;
  /** Change the MULTICAST flag on the device. */
  multicast?: OnOffToggle;
  /**
   * Change the ALLMULTI flag on the device.
   * When enabled, instructs network driver to retrieve all multicast  packets from the network to
   * the kernel for further processing.
   */
  allmulticast?: OnOffToggle;
  /**
   * Change the PROMISC flag on the device.
   * When enabled, activates promiscuous operation of the network device.
   */
  promisc?: OnOffToggle;
  /**
   * Change the PROTODOWN state on the device. Indicates that a protocol error has been detected on the port.
   * Switch drivers can react to this error by doing a phys down on the switch port.
   */
  protodown?: OnOffToggle;
  /**
   * Set PROTODOWN reasons on the device. protodown reason bit names can be enumerated under
   * `/etc/iproute2/protodown_reasons.d/`.
   *
   * Possible reasons bits 0-31.
   */
  protodown_reason?: {
    name: number;
    enable: OnOffToggle;
  };
  /** Change the NOTRAILERS flag on the device, NOT used by the Linux and exists for BSD compatibility. */
  trailers?: OnOffToggle;
  /** Change the transmit queue length of the device. */
  txqueuelen?: number;
  /** Change the bitrate of the device. */
  bitrate?: number;
  /**
   * Change the name of the device.
   * This operation is not recommended if the device is running or has some addresses already configured.
   */
  name?: string;
  /** Change the station address of the interface. */
  address?: string;
  /** Change the link layer broadcast address or the peer address when the interface is POINTOPOINT. */
  broadcast?: string;
  /** Change the MTU of the device. */
  mtu?: number;
  /**
   * Move the device to the network namespace associated with name NETNSNAME or process PID.
   *
   * Some devices are not allowed to change network namespace: loopback, bridge, wireless.
   * These are network namespace local devices. In such case ip tool will return "Invalid argument" error.
   * It is possible to find out if device is local to a single network namespace by checking netns-local
   * flag in the output of the ethtool:
   *
   *    ethtool -k DEVICE
   *
   * To change network namespace for wireless devices the iw tool can be used. But it allows to change
   * network namespace only for physical devices and by process PID.
   */
  netns?: number | string;
  /** Set peer netnsid for a cross-netns interface. */
  'link-netnsid'?: number;
  /** Give the device a symbolic name for easy reference. */
  alias?: string;
  /**
   * Specify a Virtual Function device to be configured.
   * The associated PF device must be specified using the {@link LinkSetDevOptions.dev_ | dev_} parameter.
   */
  vf?: number;
  vf_args?: {
    /**
     * Change the station address for the specified VF.
     * The {@link vf} parameter must be specified.
     */
    mac?: string;
    vlan_list?: Array<{
      /**
       * Change the assigned VLAN for the specified VF.
       *
       * When specified, all traffic sent from the VF will be tagged with the specified VLAN ID.
       * Incoming traffic will be filtered for the specified VLAN ID, and will have all VLAN tags
       * stripped before being passed to the VF.
       *
       * Setting this parameter to `0` disables VLAN tagging and filtering.
       * The {@link vf} parameter must be specified.
       */
      vlan: number;
      /**
       * Assign VLAN QOS (priority) bits for the VLAN tag.
       *
       * When specified, all VLAN tags transmitted by the VF will include the specified priority bits in the VLAN tag.
       *
       * If not specified, the value is assumed to be `0`.
       * Both the {@link vf} and {@link vlan} parameters must be specified.
       * Setting both {@link vlan} and {@link qos} as `0` disables VLAN tagging and filtering for the VF.
       */
      qos?: number;
      /**
       * Assign VLAN PROTOCOL for the VLAN tag, either `802.1Q` or `802.1ad`.
       *
       * Setting to `802.1ad`, all traffic sent from the VF will be tagged with VLAN S-Tag.
       * Incoming traffic will have VLAN S-Tags stripped before being passed to the VF.
       * Setting to `802.1ad` also enables an option to concatenate another VLAN tag, so both S-TAG and C-TAG will
       * be inserted/stripped for outgoing/incoming traffic, respectively.
       *
       * If not specified, the value is assumed to be `802.1Q`.
       * Both the {@link vf} and {@link vlan} parameters must be specified.
       */
      proto?: VlanProtocols;
    }>;
    /**
     * Change the allowed transmit bandwidth, in Mbps, for the specified VF.
     * Setting this parameter to `0` disables rate limiting.
     * {@link vf} parameter must be specified.
     * Please use new API {@link max_tx_rate} option instead.
     */
    rate?: number;
    /**
     * Change the allowed maximum transmit bandwidth, in Mbps, for the specified VF.
     * Setting this parameter to `0` disables rate limiting.
     * {@link vf} parameter must be specified.
     */
    max_tx_rate?: number;
    /**
     * Change the allowed minimum transmit bandwidth, in Mbps, for the specified VF.
     * Minimum TXRATE should be always <= Maximum TXRATE.
     * Setting this parameter to `0` disables rate limiting.
     * {@link vf} parameter must be specified.
     */
    min_tx_rate?: number;
    /** Turn packet spoof checking on or off for the specified VF. */
    spoofchk?: OnOffToggle;
    /**
     * Toggle the ability of querying the RSS configuration of a specific VF.
     * VF RSS information like RSS hash key may be considered sensitive on some devices where this information
     * is shared between VF and PF and thus its querying may be prohibited by default.
     */
    query_rss?: OnOffToggle;
    /**
     * Set the virtual link state as seen by the specified VF.
     * Setting to auto means a reflection of the PF link state, enable lets the VF to communicate with other
     * VFs on this host even if the PF link state is down, disable causes the HW to drop any packets sent by the VF.
     */
    state?: EnableDisableAutoToggle;
    /**
     * Trust the specified VF user.
     * This enables that VF user can set a specific feature which may impact security and/or performance.
     * (e.g. VF multicast promiscuous mode)
     */
    trust?: OnOffToggle;
    /** Configure node GUID for Infiniband VFs. */
    node_guid?: number;
    /** Configure port GUID for Infiniband VFs. */
    port_guid?: number;
  };
  /**
   * Set (or unset) a XDP ("eXpress Data Path") BPF program to run on every packet at driver level.
   *
   * `ip link` output will indicate a {@link xdp} flag for the networking device. If the driver does not have native XDP
   * support, the kernel will fall back to a slower, driver-independent "generic" XDP variant.
   *
   * The `ip link` output will in that case indicate {@link xdpgeneric} instead of {@link xdp} only.
   * If the driver does have native XDP support, but the program is loaded under {@link xdpgeneric} object | pinned
   * then the kernel will use the generic XDP variant instead of the native one.
   *
   * {@link xdpdrv} has the opposite effect of requestsing that the automatic fallback to the generic XDP variant be
   * disabled and in case driver is not XDP-capable error should be returned.
   * {@link xdpdrv} also disables hardware offloads.
   *
   * {@link xdpoffload} in `ip link` output indicates that the program has been offloaded to hardware and can also be
   * used to request the "offload" mode, much like {@link xdpgeneric} it forces program to be installed specifically in
   * HW/FW of the apater.
   *
   * @see {@link XdpOptionTypes}
   */
  xdp?: {
    [key in XdpOptionTypes]?: XdpOptionTypesMappings[key];
  };
  /** @see {@link xdp} */
  xdpgeneric?: {
    [key in XdpOptionTypes]?: XdpOptionTypesMappings[key];
  };
  /** @see {@link xdp} */
  xdpdrv?: {
    [key in XdpOptionTypes]?: XdpOptionTypesMappings[key];
  };
  /** @see {@link xdp} */
  xdpoffload?: {
    [key in XdpOptionTypes]?: XdpOptionTypesMappings[key];
  };
  /** Set master device of the device (enslave device). */
  master?: string;
  /** Unset master device of the device (release device). */
  nomaster?: true;
  /** Set the IPv6 address generation mode. */
  addrgenmode?: AddrGenMode;
}

/**
 * Link set group options.
 *
 * @category Interfaces
 * @internal
 */
export interface LinkSetGroupOptions extends LinkSetCommonOptions {
  /**
   * GROUP has a dual role: If both group and dev are present, then move the device to the specified group.
   * If only a group is specified, then the command operates on all devices in that group.
   */
  group?: number;
}

/**
 * Link set dev options.
 *
 * @category Interfaces
 * @internal
 */
export interface LinkSetDevOptions extends LinkSetCommonOptions {
  /**
   * Specifies network device to operate on.
   *
   * When configuring SR-IOV Virtual Function (VF) devices, this keyword should
   * specify the associated Physical Function (PF) device.
   */
  dev?: string;
}

/**
 * Link set options.
 * @category Interfaces
 */
export type LinkSetOptions = LinkSetGroupOptions | LinkSetDevOptions;

/**
 * Xdp option types mappings.
 * @category Interfaces
 */
export interface XdpOptionTypesMappings {
  [XdpOptionTypes.Off]: LinkSetXdpOffOptions;
  [XdpOptionTypes.Object]: LinkSetXdpObjectOptions;
  [XdpOptionTypes.Pinned]: LinkSetXdpPinnedOptions;
}