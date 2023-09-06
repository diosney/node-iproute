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

// General utilities functions to provide extra handy functionality not present in iproute.
import * as utilsModule from './utils';
import utilsDefaults from './utils';

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
  invisibleKeySuffix,
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
  GlobalOptionsWithRequiredFilePath
} from './common/interfaces/common';

export { MonitorEmittedData } from './common/interfaces/monitor';

//
// Common/Errors.
//
export { CommandError } from './common/errors/command';
export { ParametersError } from './common/errors/parameters';

/**
 * Network devices configuration.
 *
 * @see [Man Page](https://man7.org/linux/man-pages/man8/ip-link.8.html)
 * @category IP Commands
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
 */
export { monitorModule as monitor };
export { MonitorObjects } from './commands/monitor.constants';
export { MonitorOptions } from './commands/monitor/monitor.interfaces';

/**
 * Custom utility library that complements `iproute` suite.
 * @category IP Commands
 */
export { utilsModule as utils };
export { RoutingTable, RoutingTableOptions } from './utils/routing-tables.interfaces';

import Command from './common/classes/command';

export { Command as Command };

import MonitorCommand from './common/classes/monitor-command';

export { MonitorCommand as MonitorCommand };

/** @hidden **/
export default {
  link: linkDefaults,
  address: addressDefaults,
  rule: ruleDefaults,
  route: routeDefaults,
  monitor: monitorDefaults,
  // Extras.
  utils: utilsDefaults
};