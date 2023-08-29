/**
 * The scope of the area where this address is valid.
 * The available scopes are listed in file `/etc/iproute2/rt_scopes`.
 * Predefined scope values are:
 *
 * @category Constants
 */
export enum AddressScopes {
  /** The address is globally valid. */
  Global = 'global',
  /** (IPv6 only, deprecated) The address is site local, i.e. it is valid inside this site. */
  Site   = 'site',
  /** The address is link local, i.e. it is valid only on this device. */
  Link   = 'link',
  /** The address is valid only inside this host. */
  Host   = 'host',
}

/**
 * Representing various network address families.
 * @category Constants
 */
export enum AddressFamilies {
  /** IPv4 protocol. */
  Inet   = 'inet',
  /** IPv6 protocol. */
  Inet6  = 'inet6',
  /** Multi-Protocol Label Switching. */
  Mpls   = 'mpls',
  /** Bridging (MAC-level). */
  Bridge = 'bridge',
  /** Link layer interface. */
  Link   = 'link',
}