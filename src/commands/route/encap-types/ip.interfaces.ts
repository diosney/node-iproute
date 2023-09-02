import { TtlSpecialValues } from '../../link.constants';

/**
 * Add route ip encap arguments.
 * @category Interfaces
 */
export interface AddRouteIpEncapArgs {
  /** Tunel id. */
  id: number;
  /** Remote IP. */
  dst: string;
  /** XXX */
  src?: string;
  /** XXX */
  tos?: number;
  /** XXX */
  ttl?: number | TtlSpecialValues;
}