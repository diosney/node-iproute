/**
 * Ntable change options.
 * @category Interfaces
 */
export interface NtableChangeOptions {
  /** The name of the table to modify. */
  name: string;
  /** The name of the device to modify the table values. */
  dev?: string;
  /** The threshold value 1. */
  thresh1?: number;
  /** The threshold value 2. */
  thresh2?: number;
  /** The threshold value 3. */
  thresh3?: number;
  /** Garbage collection interval in milliseconds. */
  gc_int?: number;
  /** Base reachable time in milliseconds. */
  base_reachable?: number;
  /** Retransmission time in milliseconds. */
  retrans?: number;
  /** Time duration to consider a neighbor entry as stale in milliseconds. */
  gc_stale?: number;
  /** Delay before first probe in milliseconds. */
  delay_probe?: number;
  /** Maximum length of the queue. */
  queue?: number;
  /** Number of application level probes to send. */
  app_probs?: number;
  /** Number of unicast probes to send. */
  ucast_probes?: number;
  /** Number of multicast probes to send. */
  mcast_probes?: number;
  /** Delay before sending anycast probes in milliseconds. */
  anycast_delay?: number;
  /** Delay before sending proxy probes in milliseconds. */
  proxy_delay?: number;
  /** Maximum length of the proxy queue. */
  proxy_queue?: number;
  /** Locktime duration in milliseconds. */
  locktime?: number;
}