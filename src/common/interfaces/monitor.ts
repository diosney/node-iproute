/**
 * The returned data emitted from {@link monitor}
 * @category Interfaces
 */
export interface MonitorEmittedData {
  /**
   * The object that caused the update.
   * For now is the same prefix that `ip monitor` sets in the emitted data, ex: `NEIGH`.
   * Later on when parsed, will be a member of {@link MonitorObjects}.
   */
  object: string; // TODO: Parse into MonitorObjects.
  /** The lines that `ip monitor` gave to `stdout` when an update came. */
  lines: string[];
  // TODO: Add a parsed `data` in the future? It would be best if `iproute` team added `-json` option to `monitor` too.
}