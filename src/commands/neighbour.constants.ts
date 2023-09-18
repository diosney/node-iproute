/**
 * Neighbour Unreachability Detection (NUD) states.
 * @category Constants
 */
export enum NudStates {
  /** The neighbour entry is valid forever and can be only be removed administratively. */
  Permanent  = 'permanent',
  /**
   * The neighbour entry is valid.
   * No attempts to validate this entry will be made but it can be removed when its lifetime expires.
   */
  Noarp      = 'noarp',
  /** The neighbour entry is valid until the reachability timeout expires. */
  Reachable  = 'reachable',
  /**
   * The neighbour entry is valid but suspicious.
   * This option to `ip neigh` does not change the neighbour state if it was valid and the address
   * is not changed by this command.
   */
  Stale      = 'stale',
  /**
   * This is a pseudo state used when initially creating a neighbour entry or after trying to
   * remove it before it becomes free to do so.
   */
  None       = 'none',
  /** The neighbour entry has not (yet) been validated/resolved. */
  Incomplete = 'incomplete',
  /** Neighbor entry validation is currently delayed. */
  Delay      = 'delay',
  /** Neighbor is being probed. */
  Probe      = 'probe',
  /** Max number of probes exceeded without success, neighbor validation has ultimately failed. */
  Failed     = 'failed'
}