import { HsrProtocols, HsrVersions } from '../add.constants';

export interface LinkHsrTypeOptions {
  /** Specifies the physical device used for the first of the two ring ports. */
  slave1: string;
  /** Specifies the physical device used for the second of the two ring ports. */
  slave2: string;
  /**
   *  The last byte of the multicast address used for HSR supervision frames.
   *  Default option is "0", possible values 0-255.
   */
  supervision?: number;
  /** Selects the lowest value of the UDP tunnel source port range. */
  version?: HsrVersions;
  /** Selects the lowest value of the UDP tunnel source port range. */
  proto?: HsrProtocols;
}