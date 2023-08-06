import { RoutingTables } from './add.constants';

// TODO: Need help to build this undocumented & comprehensive interface.
export interface RuleInfo {
  priority: number;
  src: string;
  table: RoutingTables | number;
  protocol: string | number;
}