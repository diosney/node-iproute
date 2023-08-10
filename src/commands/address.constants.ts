/**
 * The scope of the area where this address is valid.
 * The available scopes are listed in file `/etc/iproute2/rt_scopes`.
 * Predefined scope values are:
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

export enum AddressFamilies {
  Inet   = 'inet',
  Inet6  = 'inet6',
  Mpls   = 'mpls',
  Bridge = 'bridge',
  Link   = 'link',
}