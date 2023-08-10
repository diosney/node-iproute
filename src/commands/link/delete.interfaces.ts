import { VirtualLinkTypes } from '../link.constants';

interface LinkDeleteCommonOptions {
  /** Specifies the type of the device. */
  type?: VirtualLinkTypes;
}

interface LinkDeleteGroupOptions extends LinkDeleteCommonOptions {
  /**
   * Specifies the group of virtual links to delete.
   * Group 0 is not allowed to be deleted since it is the default group.
   */
  group: number;
}

interface LinkDeleteDevOptions extends LinkDeleteCommonOptions {
  /** Specifies the virtual device to act operate on. */
  dev_: string;
}

export type LinkDeleteOptions = LinkDeleteGroupOptions | LinkDeleteDevOptions