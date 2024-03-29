import { ExtendedLinkTypes } from '../link.constants';

/**
 * Link show common options.
 *
 * @category Interfaces
 * @internal
 */
export interface LinkShowCommonOptions {
  /** Only display running interfaces. */
  up?: true;
  /** Specifies the master device which enslaves devices to show. */
  master?: string;
  /**
   * Specifies the type of devices to show.
   *
   * Note that the type name is not checked against the list of supported types - instead it is
   * sent as-is to the kernel.
   *
   * Later it is used to filter the returned interface list by comparing it with the relevant
   * attribute in case the kernel didn't filter already.
   *
   * Therefore any string is accepted, but may lead to empty output.
   */
  type?: ExtendedLinkTypes;
  /** Specifies the VRF which enslaves devices to show. */
  vrf?: string;
}

/**
 * Link show group options.
 *
 * @category Interfaces
 * @internal
 */
export interface LinkShowGroupOptions extends LinkShowCommonOptions {
  /** Specifies what group of devices to show. */
  group?: number;
}

/**
 * Link show dev options.
 *
 * @category Interfaces
 * @internal
 */
export interface LinkShowDevOptions extends LinkShowCommonOptions {
  /** Specifies the network device to show. */
  dev?: string;
}

/**
 * Link show options.
 * @category Interfaces
 */
export type LinkShowOptions = LinkShowGroupOptions | LinkShowDevOptions;

/**
 * Link Info.
 * TODO: Need help to build this undocumented & comprehensive interface.
 *
 * @category Interfaces
 */
export interface LinkInfo {
  ifindex: number;
  ifname: string;

  flags: string[];
  mtu: number;
  qdisc: string;
  operstate: string;

  linkmode: string;
  link_type: string;

  group: string;

  address: string;
  broadcast: string;

  txqlen: number;
  promiscuity: number;

  min_mtu: number;
  max_mtu: number;

  num_tx_queues: number;
  num_rx_queues: number;
  gso_max_size: number;
  gso_max_segs: number;

  link_netnsid?: number;
  inet6_addr_gen_mode?: string;

  link?: string;
  linkinfo?: {
    info_kind: string;
    info_data: any;
  };

  parentbus?: string;
  parentdev?: string;

  stats: {
    rx: {
      bytes: number;
      packets: number;
      errors: number;
      dropped: number;
      over_errors: number;
      multicast: number;

      compressed?: number;
      crc_errors?: number;
      frame_errors?: number;
      fifo_errors?: number;
      missed_errors?: number;
    };
    tx: {
      bytes: number;
      packets: number;
      errors: number;
      dropped: number;
      carrier_errors: number;
      collisions: number;

      aborted_errors?: number;
      fifo_errors?: number;
      heartbeat_errors?: number;
      window_errors?: number;
      compressed?: number;
    }
  };
}