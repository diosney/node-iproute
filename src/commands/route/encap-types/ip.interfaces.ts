import { TtlSpecialValues } from '../../link.constants';

export interface AddRouteIpEncapArgs {
  /** XXX */
  ip: true;
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