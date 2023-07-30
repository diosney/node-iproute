export interface LinkXfrmTypeOptions {
  /** Specifies the underlying physical interface from which transform traffic is sent and received. */
  dev: string;
  /**
   * Specifies the hexadecimal lookup key used to send traffic to and from specific xfrm policies.
   *
   * Policies must be configured with the same key.
   * If not set, the key defaults to 0 and will match any policies which similarly do not have a
   * lookup key configuration.
   */
  if_id?: number;
}