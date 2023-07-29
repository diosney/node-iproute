export interface LinkIp6GreIp6gretapTypeOptions {
  /** Specifies the remote address of the tunnel. */
  remote: string;
  /**
   * Specifies the fixed local address for tunneled packets.
   * It must be an address on another interface on this host.
   */
  local: string;
  /** @see {@link LinkGreGretapTypeOptions.seq} */
  seq?: boolean;
  /** @see {@link seq} */
  iseq?: boolean;
  /** @see {@link seq} */
  noiseq?: boolean;
  /** @see {@link seq} */
  oseq?: boolean;
  /** @see {@link seq} */
  nooseq?: boolean;
  // TODO: Actual definition is `[ [i|o]key KEY | no[i|o]key ]`, see better way to constrain type.
  /** @see {@link LinkGreGretapTypeOptions.key} */
  key?: number;
  /** @see {@link key} */
  nokey?: true;
  /** @see {@link key} */
  ikey?: number;
  /** @see {@link key} */
  noikey?: true;
  /** @see {@link key} */
  okey?: number;
  /** @see {@link key} */
  nookey?: true;
  /** @see {@link LinkGreGretapTypeOptions.csum} */
  csum?: boolean;
  /** @see {@link csum} */
  icsum?: boolean;
  /** @see {@link csum} */
  noicsum?: boolean;
  /** @see {@link csum} */
  ocsum?: boolean;
  /** @see {@link csum} */
  noocsum?: boolean;
  /** Specifies Hop Limit value to use in outgoing packets. */
  hoplimit?: number;
  /** Specifies a fixed encapsulation limit. Default is 4. */
  encaplimit?: number;
  /**
   * Specifies the traffic class field on tunneled packets, which can be specified as
   * either a two-digit hex value (e.g. `c0`) or a predefined string (e.g. `internet`).
   *
   * The value `inherit` causes the field to be copied from the original IP header.
   *
   * The values `inherit/STRING` or `inherit/00..ff` will set the field to `STRING` or
   * `00..ff` when tunneling non-IP packets.
   *
   * The default value is `00`.
   */
  tclass?: string;
  /** Specifies a fixed flowlabel. */
  flowlabel?: number;
  // TODO: Is in params but there have no docs.
  // 'dscp inherit'?: true;
  /** Specifies whether to allow remote endpoint to have an address configured on local host. */
  'allow-localremote'?: boolean;
  /** @see {@link 'allow-localremote'} */
  'noallow-localremote'?: boolean;
  /** Specifies the physical device to use for tunnel endpoint communication. */
  dev?: string;
  /**
   * Make this tunnel externally controlled (or not, which is the default).
   * In the kernel, this is referred to as collect metadata mode.
   *
   * This flag is mutually exclusive with the {@link remote}, {@link local}, {@link seq}, {@link key},
   * {@link csum}, {@link hoplimit}, {@link encaplimit}, {@link flowlabel} and {@link tclass} options.
   */
  external?: true;
}