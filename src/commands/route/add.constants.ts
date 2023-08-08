export enum RoutePreferences {
  /** The route has a lowest priority. */
  Low    = 'low',
  /** The route has a default priority. */
  Medium = 'medium',
  /** The route has a highest priority. */
  High   = 'high',
}

export enum EncapSeg6LocalActions {
  /**
   * Regular SRv6 processing as intermediate segment endpoint.
   *
   * This action only accepts packets with a non-zero Segments Left value.
   *
   * Other matching packets are dropped.
   */
  End         = 'End',
  /**
   * Regular SRv6 processing as intermediate segment endpoint.
   *
   * Additionally, forward processed packets to given next-hop.
   *
   * This action only accepts packets with a non-zero Segments Left value.
   *
   * Other matching packets are dropped.
   */
  EndX        = 'End.X',
  /**
   * Decapsulate inner IPv6 packet and forward it to the specified next-hop.
   *
   * If the argument is set to `::`, then the next-hop is selected according to the local selection rules.
   *
   * This action only accepts packets with either a zero Segments Left value or no SRH at all, and an inner IPv6 packet.
   *
   * Other matching packets are dropped.
   */
  EndDX6      = 'End.DX6',
  /**
   * Decapsulate the inner IPv6 packet and forward it according to the specified lookup table.
   *
   * TABLEID is either a number or a string from the file `/etc/iproute2/rt_tables`.
   *
   * If `vrftable` is used, the argument must be a VRF device associated with the table id.
   *
   * Moreover, the VRF table associated with the table id must be configured with the VRF strict mode
   * turned on (`net.vrf.strict_mode=1`).
   *
   * This action only accepts packets with either a zero Segments Left value or no SRH at all, and an inner IPv6 packet.
   *
   * Other matching packets are dropped.
   */
  EndDT6      = 'End.DT6',
  /**
   * Decapsulate the inner IPv4 packet and forward it according to the specified lookup table.
   *
   * TABLEID is either a number or a string from the file `/etc/iproute2/rt_tables`.
   *
   * The argument must be a VRF device associated with the table id.
   *
   * Moreover, the VRF table associated with the table id must be configured with the VRF strict mode
   * turned on (`net.vrf.strict_mode=1`).
   *
   * This action only accepts packets with either a zero Segments Left value or no SRH at all, and an inner IPv4 packet.
   *
   * Other matching packets are dropped.
   */
  EndDT4      = 'End.DT4',
  /**
   * Decapsulate the inner IPv4 or IPv6 packet and forward it according to the specified lookup table.
   *
   * TABLEID is either a number or a string from the file `/etc/iproute2/rt_tables`.
   *
   * The argument must be a VRF device associated with the table id.
   *
   * Moreover, the VRF table associated with the table id must be configured with the VRF strict mode turned on
   * (`net.vrf.strict_mode=1`). This action only accepts packets with either a zero Segments Left value or no SRH
   * at all, and an inner IPv4 or IPv6 packet.
   *
   * Other matching packets are dropped.
   */
  EndDT46     = 'End.DT46',
  /**
   *  Insert the specified SRH immediately after the IPv6 header, update the DA with the first segment
   *  of the newly inserted SRH, then forward the resulting packet.
   *
   *  The original SRH is not modified.
   *
   *  This action only accepts packets with a non-zero Segments Left value.
   *
   *  Other matching packets are dropped.
   */
  EndB6       = 'End.B6',
  /**
   * Regular SRv6 processing as intermediate segment endpoint.
   *
   * Additionally, encapsulate the matching packet within an outer IPv6 header followed by the specified SRH.
   *
   * The destination address of the outer IPv6 header is set to the first segment of the new SRH.
   *
   * The source address is set as described in `ip-sr(8)`.
   */
  EndB6Encaps = 'End.B6.Encaps'
}