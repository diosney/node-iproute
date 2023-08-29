import { IpoIbModes } from '../../link.constants';

/**
 * Add link IpoIb type arguments.
 * @category Interfaces
 */
export interface AddLinkIpoibTypeArgs {
  /** Specifies the IB P-Key to use. */
  pkey?: string;
  /** Specifies the mode to use. */
  mode?: IpoIbModes;
}