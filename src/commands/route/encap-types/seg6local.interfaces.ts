import { EncapSeg6LocalActions } from '../../route.constants';
import { NhArgs }                from '../add.interfaces';
import { RouteRoutingTables }    from '../show.constants';

/**
 * Add route seg6local encap arguments.
 * @category Interfaces
 */
export interface AddRouteSeg6LocalEncapArgs {
  /** XXX */
  seg6local: true;
  /** Operation to perform on matching packets. */
  action: EncapSeg6LocalActions;
  /** Operation arguments. */
  actionArgs_?: EndXSeg6LocalEncapArgs
    | EndDt6Seg6LocalEncapArgs
    | EndB6Seg6LocalEncapArgs;
  /**
   * Used to collect statistics on the processing of actions.
   * Three counters are implemented:
   *
   * 1) packets correctly processed;
   * 2) bytes correctly processed;
   * 3) packets that cause a processing error (i.e., missing SID List, wrong SID List, etc).
   *
   * To retrieve the counters related to an action use the `show` method.
   */
  count?: true;
}

/**
 * EndXSeg6local encap arguments.
 * @category Interfaces
 */
export interface EndXSeg6LocalEncapArgs extends NhArgs {
  nh6: true;
}

/**
 * EndDt6Seg6local encap arguments.
 * @category Interfaces
 */
export interface EndDt6Seg6LocalEncapArgs extends NhArgs {
  table?: number | RouteRoutingTables;
  vrftable?: number | RouteRoutingTables;
}

/**
 * EndB6Seg6local encap arguments.
 * @category Interfaces
 */
export interface EndB6Seg6LocalEncapArgs extends NhArgs {
  srh: true;
  /** List of comma separated IPv6 addresses. */
  segs: string;
  /**
   * Numerical value in decimal representation.
   * See ip-sr(8).
   */
  hmac?: number;
}

/**
 * EndDx6Seg6local encap arguments.
 * @category Interfaces
 */
export type EndDx6Seg6LocalEncapArgs = EndXSeg6LocalEncapArgs;
/**
 * EndDt4Seg6local encap arguments.
 * @category Interfaces
 */
export type EndDt4Seg6LocalEncapArgs = EndDt6Seg6LocalEncapArgs;
/**
 * EndDt46Seg6local encap arguments.
 * @category Interfaces
 */
export type EndDt46Seg6LocalEncapArgs = EndDt6Seg6LocalEncapArgs;
/**
 * EndB6Seg6local encap arguments.
 * @category Interfaces
 */
export type EndB6EncapsSeg6LocalEncapArgs = EndB6Seg6LocalEncapArgs;