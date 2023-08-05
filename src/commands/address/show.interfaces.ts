import { VirtualLinkTypes } from '../link/add.constants';
import { LinkInfo }         from '../link/show.interfaces';
import { AddressScopes }    from './add.constants';

export interface AddressShowOptions {
  /** The name of the device to filter and show its addresses. */
  dev?: string;
  /** Only list addresses with this scope. */
  scope?: AddressScopes | number;
  /** Only show addresses matching this prefix. */
  to?: string;
  /**
   * (IPv6 only) only list addresses installed due to stateless address configuration or only list permanent
   * (not dynamic) addresses.
   *
   * These two flags are inverses of each other, so -dynamic is equal to permanent  and -permanent is equal to dynamic.
   */
  permanent?: true;
  /** @see {@link permanent} */
  '-permanent'?: true;
  /** @see {@link permanent} */
  dynamic?: true;
  /** @see {@link permanent} */
  '-dynamic'?: true;
  /** @see {@link temporary} */
  secondary?: true;
  /**
   * Aliases for primary.
   * @see {@link primary}
   */
  '-secondary'?: true;
  /** List only primary addresses, in IPv6 exclude temporary ones.
   * This flag is the inverse of {@link temporary} and {@link secondary}.
   */
  primary?: true;
  /**
   * This is an alias for {@link temporary} or {@link secondary}.
   * @see {@link temporary}
   */
  '-primary'?: true;
  /** (IPv6 only) only list addresses which have not yet passed duplicate address detection. */
  tentative?: true;
  /**
   * Aliases for primary.
   * @see {@link primary}
   */
  '-tentative'?: true;
  /** (IPv6 only) only list deprecated addresses. */
  deprecated?: true;
  /** (IPv6 only) only list addresses not being deprecated. */
  '-deprecated'?: true;
  /** (IPv6 only) only list addresses which have failed duplicate address detection. */
  dadfailed?: true;
  /** (IPv6 only) only list addresses which have not failed duplicate address detection. */
  '-dadfailed'?: true;
  /**
   * List temporary IPv6 or secondary IPv4 addresses only. The Linux kernel shares a single bit for those, so they
   * are actually aliases for each other although the meaning differs depending on address family.
   */
  temporary?: true;
  /** @see {@link temporary} */
  '-temporary'?: true;
  /** @see {@link AddressAddOptions.home} */
  home?: true;
  /** @see {@link AddressAddOptions.mngtmpaddr} */
  mngtmpaddr?: true;
  /** @see {@link AddressAddOptions.nodad} */
  nodad?: true;
  /** @see {@link AddressAddOptions.optimistic} */
  optimistic?: true;
  /** @see {@link AddressAddOptions.noprefixroute} */
  noprefixroute?: true;
  /** @see {@link AddressAddOptions.autojoin} */
  autojoin?: true;
  /**
   * Only list addresses with labels matching the PATTERN.
   * PATTERN is a usual shell style pattern.
   */
  label?: string;
  /** Only list interfaces enslaved to this master device. */
  master?: string;
  /**
   * Only list interfaces of the given type.
   *
   * Note that the type name is not checked against the list of supported types - instead it is sent as-is to the kernel.
   * Later it is used to filter the returned interface list by comparing it with the relevant attribute in case the
   * kernel didn't filter already.
   *
   * Therefore any string is accepted, but may lead to empty output.
   */
  type?: VirtualLinkTypes;
  /** Only list interfaces enslaved to this `vrf`. */
  vrf?: string;
  /** Only list running interfaces. */
  up?: true;
}

// TODO: Need help to build this undocumented & comprehensive interface.
export interface AddressInfo extends LinkInfo {
  addr_info: Array<{
    family: string;
    local: string;
    broadcast?: string;
    prefixlen: number;
    scope: AddressScopes | number;
    label: string;
    metric?: number;

    valid_life_time: number;
    preferred_life_time: number;

    permanent?: true;
    dynamic?: true;
    secondary?: true;
    primary?: true;
    tentative?: true;
    deprecated?: true;
    dadfailed?: true;
    temporary?: true;

    home?: true;
    mngtmpaddr?: true;
    nodad?: true;
    optimistic?: true;
    noprefixroute?: true;
    autojoin?: true;
  }>;
}