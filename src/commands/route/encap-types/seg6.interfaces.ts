/**
 * Add route seg6 encap arguments.
 * @category Interfaces
 */
export interface AddRouteSeg6EncapArgs {
  /** XXX */
  seg6: true;
  mode: true;
  /** Encapsulate packet in an outer IPv6 header with SR. */
  encap?: true;
  /** Directly insert Segment Routing Header after IPv6 header. */
  inline?: true;
  /** Encapsulate ingress L2 frame within an outer IPv6 header and SRH. */
  l2encap?: true;
  /** List of comma-separated IPv6 addresses. */
  segs: string;
  /**
   * Numerical value in decimal representation.
   * See ip-sr(8).
   */
  hmac?: number;
}