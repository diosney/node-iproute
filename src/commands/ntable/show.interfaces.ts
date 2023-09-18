/**
 * Ntable show options.
 * @category Interfaces
 */
export interface NtableShowOptions {
  /** Only list the table attached to this device. */
  dev?: string;
  /** Only lists the table with the given name. */
  name?: string;
}

/**
 * Ntable Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface NtableInfo {
  family: string;
  name: string;
  dev: string;
  refcnt: number;
  reachable: number;
  base_reachable: number;
  retrans: number;
  gc_stale: number;
  delay_probe: number;
  queue: number;
  app_probes: number;
  ucast_probes: number;
  mcast_probes: number;
  anycast_delay: number;
  proxy_delay: number;
  proxy_queue: number;

  locktime?: number;
  thresh1?: number;
  thresh2?: number;
  thresh3?: number;
  gc_interval?: number;
  key_length?: number;
  entry_size?: number;
  entries?: number;
  last_flush?: string;
  last_rand?: string;
  hash_rnd?: number;
  hash_mask?: string;
  hash_chain_gc?: number;
  proxy_qlen?: number;
  allocs?: number;
  destroys?: number;
  hash_grows?: number;
  res_failed?: number;
  lookups?: number;
  hits?: number;
  rcv_probes_mcast?: number;
  rcv_probes_ucast?: number;
  periodic_gc_runs?: number;
  forced_gc_runs?: number;
  table_fulls?: number;
}