import { ExtendedVirtualLinkTypes } from './add.constants';

interface LinkShowCommonOptions {
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
  type?: ExtendedVirtualLinkTypes;
  /** Specifies the VRF which enslaves devices to show. */
  vrf?: string;
}

interface LinkShowGroupOptions extends LinkShowCommonOptions {
  /** Specifies what group of devices to show. */
  group?: number;
}

interface LinkShowDevOptions extends LinkShowCommonOptions {
  /** Specifies the network device to show. */
  dev?: string;
}

export type LinkShowOptions = LinkShowGroupOptions | LinkShowDevOptions;

// TODO: Need help to build this undocumented & comprehensive interface.
export interface LinkShowLinkInfo {
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
      packets: number;
      compressed: number;
      bytes: number;
      dropped: number;
      errors: number;
      over_errors: number;
      crc_errors: number;
      frame_errors: number;
      fifo_errors: number;
      missed_errors: number;
      multicast: number;
    };
    tx: {
      packets: number;
      bytes: number;
      dropped: number;
      aborted_errors: number;
      carrier_errors: number;
      fifo_errors: number;
      heartbeat_errors: number;
      window_errors: number;
      compressed: number;
      collisions: number;
    }
  };
}