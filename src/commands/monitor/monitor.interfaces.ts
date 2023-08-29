import { MonitorObjects } from '../monitor.constants';

/**
 * Monitor options.
 * @category Interfaces
 */
export interface MonitorOptions {
  /** Object type to monitor. */
  object_: MonitorObjects;
  /** Prints only events related to this device. */
  dev?: string;
}