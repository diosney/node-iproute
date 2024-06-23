/**
 * Neighbour get options.
 * @category Interfaces
 */
export interface NeighbourGetOptions {
  /** Gets the proxy requests too. */
  proxy?: true;
  /** The prefix selecting the neighbours to list. */
  to: string;
  /** Only list the neighbours attached to this device. */
  dev: string;
}