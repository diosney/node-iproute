import { MonitorObjects } from '../monitor.constants';

/**
 * Monitor options.
 * @category Interfaces
 */
export interface MonitorOptions {
  /** Object type to monitor. */
  object_: MonitorObjects;
  /**
   * If set, a prefix is displayed before each message to show the family of the message.
   * For `monitor`, is always enforced internally for consistency.
   */
  label?: true;
  /**
   * If set, the program listens to all network namespaces that have a `nsid` assigned into the network namespace
   * where the program is running.
   *
   * A prefix is displayed to show the network namespace where the message originates.
   * For `monitor`, is always enforced internally for consistency.
   */
  'all-nsid'?: true;
  /** Prints only events related to this device. */
  dev?: string;
}