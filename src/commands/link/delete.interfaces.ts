import { VirtualLinkTypes } from '../link.constants';
import { TypeArgs }         from './add.interfaces';

export interface LinkDeleteOptions {
  /** Specifies the virtual device to act operate on. */
  dev_?: string;
  /**
   * Specifies the group of virtual links to delete.
   * Group 0 is not allowed to be deleted since it is the default group.
   */
  group?: number;
  /** Specifies the type of the device. */
  type: VirtualLinkTypes;
  /** Specifies the additional arguments related to the specified virtual link type. */
  type_?: TypeArgs;
}