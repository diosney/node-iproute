import { IpoIbModes } from '../add.constants';

export interface LinkIpoibTypeOptions {
  /** Specifies the IB P-Key to use. */
  pkey?: string;
  /** Specifies the mode to use. */
  mode?: IpoIbModes;
}