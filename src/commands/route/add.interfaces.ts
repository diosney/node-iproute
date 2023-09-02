import { EnableDisableAsStringToggle } from '../../common/constants/attribute-values';
import { AddressFamilies, AddressScopes } from '../address.constants';
import { RoutePreferences } from '../route.constants';
import { AddRouteBpfEncapArgs } from './encap-types/bpf.interfaces';
import { AddRouteIoam6EncapArgs } from './encap-types/ioam6.interfaces';
import { AddRouteIpEncapArgs } from './encap-types/ip.interfaces';
import { AddRouteMplsEncapArgs } from './encap-types/mpls.interfaces';
import { AddRouteSeg6EncapArgs } from './encap-types/seg6.interfaces';
import { AddRouteSeg6LocalEncapArgs } from './encap-types/seg6local.interfaces';

import {
  RouteRoutingTables,
  RoutingTableProtocols,
  RouteTypes
} from './show.constants';

/**
 * Route add options.
 * @category Interfaces
 */
export interface RouteAddOptions {
  /**
   * The destination prefix of the route.
   * If TYPE is omitted, `ip` assumes type {@link RouteTypes.Unicast}.
   * PREFIX is an IP or IPv6 address optionally followed by a slash and the prefix length.
   * If the length of the prefix is missing, `ip` assumes a full-length host route.
   *
   * There is also a special PREFIX `default` - which is equivalent to IP `0/0` or to IPv6 `::/0`.
   */
  type_?: RouteTypes;
  /** The destination address. */
  to_: string;
  /**
   *  The Type Of Service (TOS) key. This key has no associated mask and the longest match is
   *  understood as: First, compare the TOS of the route and of the packet.
   *
   *  If they are not equal, then the packet may still match a route with a zero TOS.
   *
   *  TOS is either an 8 bit hexadecimal number or an identifier from `/etc/iproute2/rt_dsfield`.
   */
  tos?: number;
  dsfield?: number;
  /**
   * The table to add this route to.
   *
   * TABLEID may be a number or a string from the file /etc/iproute2/rt_tables.
   * If this parameter is omitted, ip assumes the main table, with the exception of local, broadcast
   * and nat routes, which are put into the local table by default.
   */
  table?: number | RouteRoutingTables;
  /**
   * The routing protocol identifier of this route.
   * RTPROTO may be a number or a string from the file `/etc/iproute2/rt_protos`.
   *
   * If the routing protocol ID is not given, ip assumes protocol boot (i.e. it assumes the route was added by someone
   * who doesn't understand what they are doing).
   *
   * Several protocol values have a fixed interpretation.
   */
  proto?: RoutingTableProtocols | number;
  protocol?: RoutingTableProtocols | number;
  /**
   * The scope of the destinations covered by the route prefix.
   * SCOPE_VAL may be a number or a string from the file `/etc/iproute2/rt_scopes`.
   * If this parameter is omitted, ip assumes scope `global` for all gatewayed unicast routes, scope `link` for
   * direct unicast and broadcast routes and scope `host` for local routes.
   */
  scope?: AddressScopes | number;
  /**
   * The preference value of the route.
   * NUMBER is an arbitrary 32bit number, where routes with lower values are preferred.
   */
  metric?: number;
  preference?: number;
  /**
   * Control whether TTL should be propagated from any encap into the un-encapsulated packet, overriding
   * any global configuration.
   *
   * Only supported for MPLS at present.
   */
  'ttl-propagate'?: EnableDisableAsStringToggle;
  /** Attach tunnel encapsulation attributes to this route. */
  encap?: {
    mpls?: AddRouteMplsEncapArgs;
    ip?: AddRouteIpEncapArgs;
    bpf?: AddRouteBpfEncapArgs;
    seg6?: AddRouteSeg6EncapArgs;
    seg6local?: AddRouteSeg6LocalEncapArgs;
    ioam6?: AddRouteIoam6EncapArgs;
  };
  /**
   * The address of the nexthop router, in the address family FAMILY.
   * Actually, the sense of this field depends on the route type.  For normal unicast routes it is either
   * the true next hop router or, if it is a direct route installed in BSD compatibility mode, it
   * can be a local address of the interface. For NAT routes it is the first address of the block of
   * translated IP destinations.
   *
   * The internal buffer used in iproute2 limits the maximum number of nexthops that may be specified in one go.
   * If only ADDRESS is given, the current buffer size allows for 144 IPv6 nexthops and 253 IPv4 ones.
   * For IPv4, this effectively limits the number of nexthops possible per route.
   *
   * With IPv6, further nexthops may be appended to the same route via ip route append command.
   */
  via?: {
    family?: AddressFamilies;
    address_: string;
  };
  /** The output device name. */
  dev?: string;
  /** Is a weight for this element of a multipath route reflecting its relative bandwidth or quality. */
  weight?: number;
  /** Pretend that the nexthop is directly attached to this link, even if it does not match any interface prefix. */
  onlink?: true;
  /** XXX */
  pervasive?: true;
  /** Use nexthop object with given id as nexthop specification. */
  nhid?: number;
  /** The MTU along the path to the destination. */
  mtu?: number;
  /**
   * The MSS ('Maximal Segment Size') to advertise to these destinations when establishing TCP connections.
   *
   * If it is not given, Linux uses a default value calculated from the first hop device MTU.
   *
   * (If the path to these destination is asymmetric, this guess may be wrong.)
   */
  advmss?: number;
  /** XXX */
  as?: {
    to?: true;
    address: string;
  };
  /**
   * The initial RTT ('Round Trip Time') estimate.
   *
   * If no suffix is specified the units are raw values passed  directly to the routing code to maintain
   * compatibility with previous releases.
   *
   * Otherwise if a suffix of `s`, `sec` or `secs` is used to specify seconds and `m`s, `msec` or `msecs` to specify
   * milliseconds.
   X */
  rtt?: number | string;
  /**
   * The initial RTT variance estimate. Values are specified as with rtt above.
   *
   * @see @{link rtt}
   */
  rttvar?: number | string;
  /**
   * Maximal reordering on the path to this destination.
   *
   * If it is not given, Linux uses the value selected with sysctl variable `net/ipv4/tcp_reordering`.
   */
  reordering?: number;
  /** XXX */
  window?: number;
  /** The clamp for congestion window. */
  cwnd?: number;
  /** An estimate for the initial slow start threshold. */
  ssthresh?: number;
  /** XXX */
  realms?: string;
  /**
   * The minimum TCP Retransmission TimeOut to use when communicating with this destination.
   * Values are specified as with rtt above.
   *
   * @see @{link rtt}
   */
  rto_min?: number | string;
  /**
   * The initial congestion window size for connections to this destination.
   * Actual window size is this value multiplied by the MSS (``Maximal Segment Size'') for same connection.
   * The default is zero, meaning to use the values specified in RFC2414.
   */
  initcwnd?: number;
  /**
   * The initial receive window size for connections to this destination.
   * Actual window size is this value multiplied by the MSS of the connection.
   * The default value is zero, meaning to use Slow Start value.
   */
  initrwnd?: number;
  /**
   * Enable or disable per-route features.
   *
   * Only available feature at this time is ecn to enable explicit congestion notification when initiating
   * connections to the given destination network.
   *
   * When responding to a connection request from the given network, `ecn` will also be used even if
   * the `net.ipv4.tcp_ecn` sysctl is set to `0`.
   */
  features?: {
    /** @see {@link features} */
    ecn: true;
  };
  /** Enable or disable quick ack for connections to this destination. */
  quickack?: boolean;
  /**
   * Sets a specific TCP congestion control algorithm only for a given destination.
   *
   * If not specified, Linux keeps the current global default TCP congestion control algorithm, or the one
   * set from the application.
   *
   * If the modifier lock is not used, an application may nevertheless overwrite the suggested congestion control
   * algorithm for that destination. If the modifier lock is used, then an application is not allowed to overwrite
   * the specified congestion control algorithm for that destination, thus it will be enforced/guaranteed to use
   * the proposed algorithm.
   */
  congctl?: string;
  /**
   * The IPv6 route preference.
   * PREF is a string specifying the route preference as defined in RFC4191 for Router Discovery messages.
   */
  pref?: RoutePreferences;
  /**
   * The route will be deleted after the expires time.
   * Only support IPv6 at present.
   */
  expires?: number;
  /** Enable TCP Fastopen without a cookie for connections to this destination. */
  fastopen_no_cookie?: boolean;
  /**
   * The nexthop of a multipath route.
   *
   * NEXTHOP is a complex value with its own syntax similar to the top level argument lists.
   */
  nexthops_?: Array<{
    nexthop: true;
  } & NextHopArgs>;
}

/**
 * NH arguments.
 * @category Interfaces
 */
export interface NextHopArgs {
  via?: {
    family?: AddressFamilies;
    address: string;
  };
  /** The output device name. */
  dev?: string;
  /** Is a weight for this element of a multipath route reflecting its relative bandwidth or quality. */
  weight?: number;
}