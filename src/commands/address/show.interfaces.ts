import { VirtualLinkTypes } from '../link.constants';
import { LinkInfo }         from '../link/show.interfaces';
import { AddressScopes }    from '../address.constants';

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

// TODO: Need help to build this partially compiled interface.
export interface AddressInfo extends LinkInfo {
  addr_info: Array<{
    /** @see {@link AddressFamilies } */
    family: string;
    /** @see {@link AddressAddOptions.local } */
    local: string;
    /** @see {@link AddressAddOptions.broadcast } */
    broadcast?: string;
    prefixlen: number;
    /** @see {@link AddressShowOptions.scope } */
    scope: AddressScopes | number;
    /** @see {@link AddressShowOptions.label } */
    label: string;
    /** @see {@link AddressFlushOptions.metric } */
    metric?: number;

    // Lifetime.
    /** @see {@link AddressAddOptions.valid_lft } */
    valid_life_time: number;
    /** @see {@link AddressAddOptions.preferred_lft } */
    preferred_life_time: number;

    // Flags.
    /** @see {@link AddressShowOptions.permanent } */
    permanent?: true;
    /** @see {@link AddressShowOptions.dynamic } */
    dynamic?: true;
    /** @see {@link AddressShowOptions.secondary } */
    secondary?: true;
    /** @see {@link AddressShowOptions.primary } */
    primary?: true;
    /** @see {@link AddressShowOptions.tentative } */
    tentative?: true;
    /** @see {@link AddressShowOptions.deprecated } */
    deprecated?: true;
    /** @see {@link AddressShowOptions.dadfailed } */
    dadfailed?: true;
    /** @see {@link AddressShowOptions.temporary } */
    temporary?: true;

    // ConFlags.
    /** @see {@link AddressShowOptions.home } */
    home?: true;
    /** @see {@link AddressShowOptions.mngtmpaddr } */
    mngtmpaddr?: true;
    /** @see {@link AddressShowOptions.nodad } */
    nodad?: true;
    /** @see {@link AddressShowOptions.optimistic } */
    optimistic?: true;
    /** @see {@link AddressShowOptions.noprefixroute } */
    noprefixroute?: true;
    /** @see {@link AddressShowOptions.autojoin } */
    autojoin?: true;
  }>;
}