import { EncapSeg6LocalActions } from '../../route.constants';
import { NhArgs }                from '../add.interfaces';
import { RouteRoutingTables }    from '../show.constants';

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

export interface EndXSeg6LocalEncapArgs extends NhArgs {
  nh6: true;
}

export interface EndDt6Seg6LocalEncapArgs extends NhArgs {
  table?: number | RouteRoutingTables;
  vrftable?: number | RouteRoutingTables;
}

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

export type EndDx6Seg6LocalEncapArgs = EndXSeg6LocalEncapArgs;
export type EndDt4Seg6LocalEncapArgs = EndDt6Seg6LocalEncapArgs;
export type EndDt46Seg6LocalEncapArgs = EndDt6Seg6LocalEncapArgs;
export type EndB6EncapsSeg6LocalEncapArgs = EndB6Seg6LocalEncapArgs;