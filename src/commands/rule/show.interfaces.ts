import { RuleRoutingTables } from './add.constants';

// TODO: Need help to build this undocumented & comprehensive interface.
export interface RuleInfo {
  priority: number;
  src: string;
  table: RuleRoutingTables | number;
  protocol: string | number;
}