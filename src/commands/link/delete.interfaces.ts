import { LinkTypes } from '../link.constants';
import { LinkTypesMappings } from './add.interfaces';

/**
 * Link delete options.
 * @category Interfaces
 */
export interface LinkDeleteOptions {
  /** Specifies the virtual device to act operate on. */
  dev_?: string;
  /**
   * Specifies the group of virtual links to delete.
   * Group 0 is not allowed to be deleted since it is the default group.
   */
  group?: number;
  /**
   * Specifies the type of the device.
   * @see {@link LinkTypes}
   */
  type?: {
    [key in LinkTypes]?: LinkTypesMappings[key];
  };
}