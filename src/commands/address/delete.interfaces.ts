import { AddressScopes } from '../address.constants';

/**
 * Address delete options.
 * @category Interfaces
 */
export interface AddressDeleteOptions {
  /**
   *  The address of the interface. The format of the address depends on the protocol.
   *
   *  It is a dotted quad for IP and a sequence of hexadecimal halfwords separated by colons for IPv6.
   *  The ADDRESS may be followed by a slash and a decimal number which encodes the network prefix length.
   */
  local: string;
  /**
   * The address of the remote endpoint for pointopoint interfaces.
   *
   * Again, the ADDRESS may be followed by a slash and a decimal number, encoding the network prefix length.
   * If a peer address is specified, the local address cannot have a prefix length.
   * The network prefix is associated with the peer rather than with the local address.
   */
  peer?: string;
  /**
   * The broadcast address on the interface.
   *
   * It is possible to use the special symbols '+' and '-' instead of the broadcast address.
   * In this case, the broadcast address is derived by setting/resetting the host bits of the interface prefix.
   */
  broadcast?: '+' | '-' | string;
  /** TODO: Missing from manpage. */
  anycast?: string;
  /**
   * Each address may be tagged with a label string.
   * In order to preserve compatibility with Linux-2.0 net aliases, this string must coincide with the
   * name of the device or must be prefixed with the device name followed by colon.
   * The maximum allowed total length of label is 15 characters.
   */
  label?: string;
  /**
   * The scope of the area where this address is valid.
   * The available scopes are listed in file `/etc/iproute2/rt_scopes`.
   */
  scope?: AddressScopes | number;
  /** The name of the device. */
  dev: string;
  /**
   * (IPv6 only) make the kernel manage temporary addresses created from this one as template on behalf of
   * Privacy Extensions (RFC3041).
   *
   * For this to become active, the `use_tempaddr` sysctl setting has to be set to a value greater than zero.
   * The given address needs to have a prefix length of 64.
   *
   * This flag allows to use privacy extensions in a manually configured network, just like if stateless
   * auto-configuration was active.
   */
  mngtmpaddr?: true;
}