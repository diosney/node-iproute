import { ErspanDirections } from '../add.constants';

export interface AddLinkErspanIp6erspanTypeArgs {
  /** Specifies the remote address of the tunnel. */
  remote: string;
  /**
   * Specifies the fixed local address for tunneled packets.
   * It must be an address on another interface on this host.
   */
  local: string;
  /**
   * Enable sequence numbering of ERSPAN packets.
   * This can be useful for detecting packet loss.
   */
  seq: true;
  /** A 32-bit key to identify the GRE tunnel. */
  key: number;
  /**
   * Specifies the ERSPAN version number.
   * `version` indicates the ERSPAN version to be created:
   *
   * 0 for version 0 type I,
   * 1 for version 1 (type II)
   * or 2 for version 2 (type III).
   */
  erspan_ver: number;
  /**
   * Specifies the ERSPAN v1 index field.
   * IDX indicates a 20 bit index/port number associated with the ERSPAN
   * traffic's source port and direction.
   */
  erspan?: number;
  /** Specifies the ERSPAN v2 mirrored traffic's direction.
   */
  erspan_dir?: ErspanDirections;
  /**
   * A unique identifier of an ERSPAN v2 engine within a system.
   * `hwid` is a 6-bit value for users to configure.
   */
  erspan_hwid?: number;
  /** Specifies whether to allow remote endpoint to have an address configured on local host. */
  'allow-localremote'?: boolean;
  /** @see {@link 'allow-localremote'} */
  'noallow-localremote'?: boolean;
  /**
   * Make this tunnel externally controlled (or not, which is the default).
   *
   * In the kernel, this is referred to as collect metadata mode.
   * This flag is mutually exclusive with the {@link remote},  {@link local},  {@link erspan_ver},
   * {@link erspan},  {@link erspan_dir} and  {@link erspan_hwid} options.
   */
  external?: true;
}