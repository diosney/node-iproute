import { NudStates } from '../neighbour.constants';

/**
 * Neighbour show options.
 * @category Interfaces
 */
export interface NeighbourShowOptions {
  /** List neighbour proxies. */
  proxy?: true;
  /** The prefix selecting the neighbours to list. */
  to?: string;
  /** Only list the neighbours attached to this device. */
  dev?: string;
  /**
   * Only list neighbour entries in this state.
   * If this option is absent, `ip` lists all entries except for {@link NudStates.None} and {@link NudStates.Noarp}.
   */
  nud?: NudStates;
  /** Only list the neighbours for given VRF. */
  vrf?: string;
}

/**
 * Neighbour Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface NeighbourInfo {
  dst: string;
  dev: string;
  lladdr: string;
  state: string[];
  refcnt?: number;
  used?: number;
  confirmed?: number;
  updated?: number;
  probes?: number;
}