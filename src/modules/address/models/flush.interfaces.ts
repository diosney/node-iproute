import { AddressScopes }                               from './add.constants';

export interface AddressFlushOptions {
  /** The name of the device to match the address from. */
  dev?: string;
  /**
   * The scope of the area where this address is valid.
   * The available scopes are listed in file `/etc/iproute2/rt_scopes`.
   */
  scope?: AddressScopes | string;
  /** Priority of prefix route associated with address. */
  metric?: number;
  /** Only affect addresses matching this prefix. */
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
  /** @see {@link AddressAddOptions.label} */
  label?: string;
  /** Matches addresses of running interfaces. */
  up?: true;
}