// Special commands not pertaining to a specific command object.
import * as batchModule from './commands/batch';
import batchDefaults from './commands/batch';

// Network devices configuration.
import * as linkModule from './commands/link';
import linkDefaults from './commands/link';

// Protocol address management.
import * as addressModule from './commands/address';
import addressDefaults from './commands/address';

// Routing table management.
import * as routeModule from './commands/route';
import routeDefaults from './commands/route';

// Routing policy database (RPDB) management.
import * as ruleModule from './commands/rule';
import ruleDefaults from './commands/rule';

// State monitoring.
import * as monitorModule from './commands/monitor';
import monitorDefaults from './commands/monitor';

// Protocol address label management.
import * as addrlabelModule from './commands/addrlabel';
import addrlabelDefaults from './commands/addrlabel';

// Neighbour/ARP tables management.
import * as neighbourModule from './commands/neighbour';
import neighbourDefaults from './commands/neighbour';

// Neighbour table configuration.
import * as ntableModule from './commands/ntable';
import ntableDefaults from './commands/ntable';

// Tunnel configuration.
import * as tunnelModule from './commands/tunnel';
import tunnelDefaults from './commands/tunnel';

// TunTap configuration.
import * as tuntapModule from './commands/tuntap';
import tuntapDefaults from './commands/tuntap';

// Maddress configuration.
import * as maddressModule from './commands/maddress';
import maddressDefaults from './commands/maddress';

// Multicast routing cache management.
import * as mrouteModule from './commands/mroute';
import mrouteDefaults from './commands/mroute';

// General utilities functions to provide extra handy functionality not present in iproute.
import * as utilsModule from './utils';
import utilsDefaults from './utils';

// Common.
import Command from './common/classes/command';
import MonitorCommand from './common/classes/monitor-command';

//
// Common/Constants.
//
export {
  OnOffToggle,
  EnableDisableToggle,
  EnableDisableAsStringToggle,
  EnableDisableAutoToggle
} from './common/constants/attribute-values';

export { SchemaIds } from './common/constants/schemas';

export {
  mac,
  hex4Digits,
  ipv4,
  ipv6,
  ip,
  ipWithOptionalMask,
  ipWithRequiredMask,
  ipOrAny,
  ipWithOptionalMaskAndAllAndDefaultValues,
  ipWithRequiredMaskAndAllAndDefaultValues,
  ipWithOptionalFamilyPrefix,
  slashSeparatedStrings,
  slashSeparatedNumbers,
  commaSeparatedIpv6Addresses,
  timeWithUnit,
  colonSeparatedNumbers
} from './common/constants/regexes';

//
// Common/Interfaces.
//
export {
  GlobalOptions,
  Empty,
  FilePathRequiredGlobalOption,
  StdinRequiredGlobalOption,
  GlobalOptionsWithRequiredFilePath,
  GlobalOptionsWithRequiredStdin
} from './common/interfaces/common';

export { MonitorEmittedData } from './common/interfaces/monitor';

//
// Common/Errors.
//
export { CommandError } from './common/errors/command';
export { ParametersError } from './common/errors/parameters';

/**
 * Read commands from provided file or standard input and invoke them.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { batch } from 'iproute';
 * ```
 */
export { batchModule as batch };

/**
 * Network devices configuration.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-link.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { link } from 'iproute';
 * ```
 */
export { linkModule as link };

export {
  LinkTypes,
  ExtendedLinkTypes,
  VlanProtocols,
  DontFragmentFlagValues,
  SecondaryUdpEncapsulations,
  IpipSipDeviceModes,
  IpoIbModes,
  ErspanDirections,
  TtlSpecialValues,
  MacvlanMacvtapModes,
  HsrVersions,
  HsrProtocols,
  MultiCastRouterOptions,
  IgmpVersions,
  MldVersions,
  MacsecValidationModeOptions,
  SecureAssociationEncodings,
  AddrGenMode,
  BridgeSlavePortStates,
  XdpOptionTypes
} from './commands/link.constants';

export { LinkAddOptions, LinkTypesMappings } from './commands/link/add.interfaces';
export { LinkDeleteOptions } from './commands/link/delete.interfaces';

export {
  LinkSetCommonOptions,
  LinkSetGroupOptions,
  LinkSetDevOptions,
  LinkSetOptions,
  XdpOptionTypesMappings
} from './commands/link/set.interfaces';

export {
  LinkShowCommonOptions,
  LinkShowGroupOptions,
  LinkShowDevOptions,
  LinkShowOptions,
  LinkInfo
} from './commands/link/show.interfaces';

export { SetLinkBondSlaveTypeArgs } from './commands/link/extended-virtual-link-types/bond-slave.interfaces';
export { SetLinkBridgeSlaveTypeArgs } from './commands/link/extended-virtual-link-types/bridge-slave.interfaces';

export { AddLinkBareudpTypeArgs } from './commands/link/virtual-link-types/bareup.interfaces';
export { AddLinkBridgeTypeArgs } from './commands/link/virtual-link-types/bridge.interfaces';
export { AddLinkCanTypeArgs } from './commands/link/virtual-link-types/can.interfaces';
export { AddLinkErspanIp6erspanTypeArgs } from './commands/link/virtual-link-types/erspan-ip6erspan.interfaces';
export { AddLinkGeneveTypeArgs } from './commands/link/virtual-link-types/geneve.interfaces';
export { AddLinkGreGretapTypeArgs } from './commands/link/virtual-link-types/gre-gretap.interfaces';
export { AddLinkHsrTypeArgs } from './commands/link/virtual-link-types/hsr.interfaces';
export { AddLinkIp6GreIp6gretapTypeArgs } from './commands/link/virtual-link-types/ip6gre-ip6gretap.interfaces';
export { AddLinkIpipSitTypeArgs } from './commands/link/virtual-link-types/ipip-sit.interfaces';
export { AddLinkIpoibTypeArgs } from './commands/link/virtual-link-types/ipoib.interfaces';
export { AddLinkMacsecTypeArgs } from './commands/link/virtual-link-types/macsec.interfaces';
export { AddLinkMacvlanMacvtapTypeArgs, SetLinkMacvlanMacvtapTypeArgs } from './commands/link/virtual-link-types/macvlan-macvtap.interfaces';
export { AddLinkRmnetTypeArgs } from './commands/link/virtual-link-types/rmnet.interfaces';
export { AddLinkVethVxcanTypeArgs } from './commands/link/virtual-link-types/veth-vxcan.interfaces';
export { AddLinkVlanTypeArgs } from './commands/link/virtual-link-types/vlan.interfaces';
export { AddLinkVrfTypeArgs } from './commands/link/virtual-link-types/vrf.interfaces';
export { AddLinkVxlanTypeArgs } from './commands/link/virtual-link-types/vxlan.interfaces';
export { AddLinkXfrmTypeArgs } from './commands/link/virtual-link-types/xfrm.interfaces';

export { LinkSetXdpObjectOptions } from './commands/link/xdp-options/object.interfaces';
export { LinkSetXdpOffOptions } from './commands/link/xdp-options/off.interfaces';
export { LinkSetXdpPinnedOptions } from './commands/link/xdp-options/pinned.interfaces';

/**
 * Protocol address management.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-address.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { address } from 'iproute';
 * ```
 */
export { addressModule as address };

export { AddressScopes, AddressFamilies } from './commands/address.constants';
export { AddressAddOptions } from './commands/address/add.interfaces';
export { AddressDeleteOptions } from './commands/address/delete.interfaces';
export { AddressFlushOptions } from './commands/address/flush.interfaces';

export {
  AddressShowOptions,
  LinkWithAddressInfo,
  OnlyAddressInfo,
  AddressInfo
} from './commands/address/show.interfaces';

/**
 * Routing table management.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-route.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { route } from 'iproute';
 * ```
 */
export { routeModule as route };
export {
  RoutePreferences,
  EncapSeg6LocalActions,
  EncapTypes
} from './commands/route.constants';

export { RouteAddOptions, NextHopArgs, EncapTypesMappings, EncapSeg6LocalActionsMappings } from './commands/route/add.interfaces';
export { RouteGetOptions } from './commands/route/get.interfaces';
export { RouteRoutingTables, RoutingTableProtocols, RouteTypes } from './commands/route/show.constants';
export { RouteShowOptions, RouteInfo } from './commands/route/show.interfaces';
export { AddRouteBpfEncapArgs } from './commands/route/encap-types/bpf.interfaces';
export { AddRouteIoam6EncapArgs } from './commands/route/encap-types/ioam6.interfaces';
export { AddRouteIpEncapArgs } from './commands/route/encap-types/ip.interfaces';
export { AddRouteMplsEncapArgs } from './commands/route/encap-types/mpls.interfaces';
export { AddRouteSeg6EncapArgs } from './commands/route/encap-types/seg6.interfaces';
export {
  AddRouteSeg6LocalEncapArgs,
  EndXSeg6LocalEncapArgs,
  EndDt6Seg6LocalEncapArgs,
  EndB6Seg6LocalEncapArgs,
  EndDx6Seg6LocalEncapArgs,
  EndDt4Seg6LocalEncapArgs,
  EndDt46Seg6LocalEncapArgs,
  EndB6EncapsSeg6LocalEncapArgs
} from './commands/route/encap-types/seg6local.interfaces';

/**
 * Routing policy database (RPDB) management.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-rule.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { rule } from 'iproute';
 * ```
 */
export { ruleModule as rule };
export { RoutingTables, RuleTypes } from './commands/rule.constants';
export { RuleAddOptions } from './commands/rule/add.interfaces';
export { RuleShowOptions, RuleInfo } from './commands/rule/show.interfaces';

/**
 * State monitoring.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-monitor.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { monitor } from 'iproute';
 * ```
 */
export { monitorModule as monitor };
export { MonitorObjects } from './commands/monitor.constants';
export { MonitorOptions } from './commands/monitor/monitor.interfaces';

/**
 * Protocol address label management.
 *
 * @remarks
 * IPv6 address labels are used for address selection; they are described in RFC 3484.
 * Precedence is managed by userspace, and only the label itself is stored in the kernel.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-addrlabel.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { addrlabel } from 'iproute';
 * ```
 */
export { addrlabelModule as addrlabel };
export { AddrlabelAddOptions } from './commands/addrlabel/add.interfaces';
export { AddrlabelDelOptions } from './commands/addrlabel/del.interfaces';
export { AddrlabelInfo } from './commands/addrlabel/list.interfaces';

/**
 * Neighbour/ARP tables management.
 *
 * @remarks
 * Manipulates neighbour objects that establish bindings between protocol addresses and
 * link layer addresses for hosts sharing the same link.
 *
 * Neighbour entries are organized into tables.
 * The IPv4 neighbour table is also known by another name - the ARP table.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-neighbour.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { neighbour } from 'iproute';
 * ```
 */
export { neighbourModule as neighbour };
export { NudStates } from './commands/neighbour.constants';
export { NeighbourAddOptions } from './commands/neighbour/add.interfaces';
export { NeighbourDelOptions } from './commands/neighbour/del.interfaces';
export { NeighbourShowOptions, NeighbourInfo } from './commands/neighbour/show.interfaces';
export { NeighbourGetOptions } from './commands/neighbour/get.interfaces';

/**
 * Neighbour table configuration.
 *
 * @remarks
 * Controls the parameters for the neighbour tables.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-ntable.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { ntable } from 'iproute';
 * ```
 */
export { ntableModule as ntable };
export { NtableInfo, NtableShowOptions } from './commands/ntable/show.interfaces';
export { NtableChangeOptions } from './commands/ntable/change.interfaces';

/**
 * Tunnel configuration.
 *
 * @remarks
 * Tunnel objects are tunnels, encapsulating packets in IP packets and then sending them over
 * the IP infrastructure.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-tunnel.8.html)
 * @category IP Commands
 *
 * @example
 * ```
 * import { tunnel } from 'iproute';
 * ```
 */
export { tunnelModule as tunnel };
export { TunnelInfo, TunnelModes } from './commands/tunnel.constants';
export { TunnelAddOptions } from './commands/tunnel/add.interfaces';
export { Tunnel6rdOptions } from './commands/tunnel/6rd.interfaces';
export { TunnelPrlOptions } from './commands/tunnel/prl.interfaces';

/**
 * TunTap.
 *
 * TODO: Man page doesn't exist yet.
 * @category IP Commands
 *
 * @example
 * ```
 * import { tuntap } from 'iproute';
 * ```
 */
export { tuntapModule as tuntap };
export { TunTapTunnelModes } from './commands/tuntap.constants';
export { TunTapTunnelAddOptions } from './commands/tuntap/add.interfaces';
export { TunTapTunnelShowOptions, TunTapTunnelInfo } from './commands/tuntap/show.interfaces';

/**
 * Multicast addresses management.
 *
 * @category IP Commands
 *
 * @example
 * ```
 * import { maddress } from 'iproute';
 * ```
 */
export { maddressModule as maddress };
export { MaddressAddOptions } from './commands/maddress/add.interfaces';
export { MaddressShowOptions, MaddressInfo } from './commands/maddress/show.interfaces';

/**
 * Multicast routing cache management.
 *
 * @remarks
 * `mroute` objects are multicast routing cache entries created by a user-level mrouting daemon (f.e. `pimd` or `mrouted`).
 *
 * Due to the limitations of the current interface to the multicast routing engine, it is impossible
 * to change `mroute` objects administratively, so we can only display them.
 * This limitation will be removed in the future.
 *
 * @category IP Commands
 *
 * @example
 * ```
 * import { mroute } from 'iproute';
 * ```
 */
export { mrouteModule as mroute };
export { MrouteInfo, MrouteShowOptions } from './commands/mroute/show.interfaces';

/**
 * Custom utility library that complements `iproute` suite.
 * @category IP Commands
 *
 * @example
 * ```
 * import { utils } from 'iproute';
 * ```
 */
export { utilsModule as utils };
export { RoutingTable, RoutingTableOptions } from './utils/routing-tables.interfaces';

// Internal classes.
export { Command as Command };
export { MonitorCommand as MonitorCommand };

/** @hidden **/
export default {
  // Special methods not pertaining to IP commands.
  batch: batchDefaults,
  // IP Commands.
  link     : linkDefaults,
  address  : addressDefaults,
  rule     : ruleDefaults,
  route    : routeDefaults,
  monitor  : monitorDefaults,
  addrlabel: addrlabelDefaults,
  neighbour: neighbourDefaults,
  ntable   : ntableDefaults,
  tunnel   : tunnelDefaults,
  tuntap   : tuntapDefaults,
  maddress : maddressDefaults,
  mroute   : mrouteDefaults,
  // Extras.
  utils: utilsDefaults
};