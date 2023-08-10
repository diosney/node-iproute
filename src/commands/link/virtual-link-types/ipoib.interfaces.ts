import { IpoIbModes } from '../../link.constants';

export interface AddLinkIpoibTypeArgs {
  /** Specifies the IB P-Key to use. */
  pkey?: string;
  /** Specifies the mode to use. */
  mode?: IpoIbModes;
}