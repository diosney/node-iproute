export interface AddressDeleteOptions {
  /**
   *  The address of the interface. The format of the address depends on the protocol.
   *
   *  It is a dotted quad for IP and a sequence of hexadecimal halfwords separated by colons for IPv6.
   *  The ADDRESS may be followed by a slash and a decimal number which encodes the network prefix length.
   */
  local: string;
  /** The name of the device to delete the address FROM. */
  dev: string;
}