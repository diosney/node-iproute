import { NudStates } from '../neighbour.constants';

/**
 * Neighbour add options.
 * @category Interfaces
 */
export interface NeighbourAddOptions {
  /**
   * The protocol address of the neighbour.
   * It is either an IPv4 or IPv6 address.
   */
  to: string;
  /**
   * The link layer address of the neighbour.
   * LLADDRESS can also be null.
   */
  lladdr?: string;
  /**
   * The state of the neighbour entry.
   * `nud` is an abbreviation for 'Neighbour Unreachability Detection'.
   */
  nud?: NudStates;
  /** Indicates whether we are proxying for this neighbour entry. */
  proxy?: true;
  /** The interface to which this neighbour is attached. */
  dev?: string;
  /** Indicates whether neighbour is a router. */
  router?: true;
  /**
   * This neigh entry was learned externally.
   * This option can be used to indicate to the kernel that this is a controller learnt dynamic entry.
   * Kernel will not gc such an entry.
   */
  extern_learn?: true;
}