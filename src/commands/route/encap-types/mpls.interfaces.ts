import { TtlSpecialValues } from '../../link.constants';

/**
 * Add route mpls encap arguments.
 * @category Interfaces
 */
export interface AddRouteMplsEncapArgs {
  /** Mpls label stack with labels separated by /. */
  label: true | string;
  /** TTL to use for MPLS header or 0 to inherit from IP header. */
  ttl?: number | TtlSpecialValues;
}