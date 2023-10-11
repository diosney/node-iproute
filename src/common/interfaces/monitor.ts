import { MonitorObjects } from '../../commands/monitor.constants';

/**
 * The returned data emitted from {@link monitor}
 * @category Interfaces
 */
export interface MonitorEmittedData {
  /** The event timestamp in the format `<YYYY>-<MM>-<DD>T<hh:mm:ss>.<ms>`. */
  timestamp: string;
  /** The namespace which the event originated from. */
  nsid: string;
  /** The object that caused the update. */
  object: MonitorObjects;
  /** The lines that `ip monitor` gave to `stdout` when an update came, parsed in interesting lines. */
  lines: string[];
  /** The original line emitted by the command. */
  originalLine: string;
  // TODO: Add a parsed `data` in the future? It would be best if `iproute` team added `-json` option to `monitor` too.
}