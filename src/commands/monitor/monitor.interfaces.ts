import { MonitorObjects } from '../monitor.constants';

export interface MonitorOptions {
  /** Object type to monitor. */
  object: MonitorObjects;
  /** Prints only events related to this device. */
  dev?: string;
}