import { AddressScopes } from './add.constants';

export interface AddressAddOptions {
  /**
   *  The address of the interface. The format of the address depends on the protocol.
   *
   *  It is a dotted quad for IP and a sequence of hexadecimal halfwords separated by colons for IPv6.
   *  The ADDRESS may be followed by a slash and a decimal number which encodes the network prefix length.
   */
  local: string;
  /** The name of the device to add the address to. */
  dev: string;
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
  /** Priority of prefix route associated with address. */
  metric?: number;
  /**
   * The valid lifetime of this address; see section 5.5.4 of RFC 4862.
   * When it expires, the address is removed by the kernel.
   * Defaults to `forever`.
   */
  valid_lft?: 'forever' | number;
  /**
   * The preferred lifetime of this address; see section 5.5.4 of RFC 4862.
   * When it expires, the address is no longer used for new outgoing connections.
   * Defaults to `forever`.
   */
  preferred_lft?: 'forever' | number;
  /** (IPv6 only) designates this address the "home address" as defined in RFC 6275. */
  home?: true;
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
  /** (IPv6 only) do not perform Duplicate Address Detection (RFC 4862) when adding this address. */
  nodad?: true;
  /** (IPv6 only) When performing Duplicate Address Detection, use the RFC 4429 optimistic variant. */
  optimistic?: true;
  /**
   * Do not automatically create a route for the network prefix of the added address, and don't search for one
   * to delete when removing the address.
   *
   * Changing an address to add this flag will remove the automatically added prefix route, changing it
   * to remove this flag will create the prefix route automatically.
   */
  noprefixroute?: true;
  /**
   * Joining multicast groups on Ethernet level via ip maddr command does not work if connected to an Ethernet
   * switch that does IGMP snooping since the switch would not replicate multicast packets on ports that did
   * not have IGMP reports for the multicast addresses.
   *
   * Linux VXLAN interfaces created via ip link add vxlan have the group option that enables them to do the required
   * join.
   *
   * Using the autojoin flag when adding a multicast address enables similar functionality for Openvswitch VXLAN
   * interfaces as well as other tunneling mechanisms that need to receive multicast traffic.
   */
  autojoin?: true;
}