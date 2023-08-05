import { MacvlanMacvtapModes } from '../add.constants';

export interface AddLinkMacvlanMacvtapTypeArgs {
  /**
   * Specifies the mode.
   *
   * @see {@Link MacvlanMacvtapModes}
   */
  mode: MacvlanMacvtapModes;
  /**
   *  Set the length of the RX queue used to process broadcast and multicast packets.
   *
   *  LENGTH must be a positive integer in the range [0-4294967295].
   *  Setting a length of 0 will effectively drop all broadcast/multicast traffic.
   *  If not specified the macvlan driver default (1000) is used.
   *
   *  Note that all macvlans that share the same underlying device are using the same queue.
   *  The parameter here is a request, the actual queue length used will be the maximum length
   *  that any macvlan interface has requested.
   *
   *  When listing device parameters both the bcqueuelen parameter as well as the actual used bcqueuelen
   *  are listed to better help the user understand the setting.
   */
  bcqueuelen?: number;
}

export interface SetLinkMacvlanMacvtapTypeArgs {
  /** Modify list of allowed {@link macaddr} for link in source mode. */
  macaddr?: true;
  /** Add MACADDR to allowed list. */
  add?: string;
  /** Replace allowed list. */
  set?: string;
  /** Remove MACADDR from allowed list. */
  del?: string;
  /** Flush whole allowed list. */
  flush?: true;
  /**
   * Set the length of the RX queue used to process broadcast and multicast packets.
   * LENGTH must be a positive integer in the range [0-4294967295].
   *
   * Setting a length of 0 will effectively drop all broadcast/multicast traffic.
   * If not specified the macvlan driver default (1000) is used.
   *
   * Note that all macvlans that share the same un‐derlying device are using the same queue.
   * The parameter here is a request, the actual queue length used will be the maximum length
   * that any macvlan interface has requested.
   *
   * When listing device parameters both the {@lLink bcqueuelen} parameter as well as the actual used
   * {@lLink bcqueuelen} are listed to better help the user understand the setting.
   */
  bcqueuelen?: number;
}