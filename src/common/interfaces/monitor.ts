export interface MonitorEmittedData {
  object: string;
  lines: string[];
  // TODO: Add a parsed `data` in the future? It would be best if `iproute` team added `-json` option to `monitor` too.
}