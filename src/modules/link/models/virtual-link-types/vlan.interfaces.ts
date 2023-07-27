import { OnOffToggle }   from '../../../../common/constants/attribute-values';
import { VlanProtocols } from '../add.constants';

export interface LinkVlanTypeOptions {
  /** VLAN Protocol. */
  protocol?: VlanProtocols;
  /**
   * Specifies the VLAN Identifier to use.
   * Note that numbers with a leading " 0 " or " 0x " are interpreted as octal
   * or hexadecimal, respectively.
   */
  id: number;
  /** Specifies whether ethernet headers are reordered or not (default is on). */
  reorder_hdr?: OnOffToggle;
  /** Specifies whether this VLAN should be registered using GARP VLAN Registration Protocol. */
  gvrp?: OnOffToggle;
  /** Specifies whether this VLAN should be registered using Multiple VLAN Registration Protocol. */
  mvrp?: OnOffToggle;
  /** Specifies whether the VLAN device state is bound to the physical device state. */
  loose_binding?: OnOffToggle;
  /** Specifies whether the VLAN device link state tracks the state of bridge ports that are members of the VLAN. */
  bridge_binding?: OnOffToggle;
  /**
   * Defines a mapping of VLAN header prio field to the Linux internal packet priority on incoming frames.
   * The format is FROM:TO with multiple mappings separated by spaces.
   */
  'ingress-qos-map'?: string;
  /**
   * Defines a mapping of Linux internal packet priority to VLAN header prio field but for outgoing frames.
   * The format is the same as for {@link ingress-qos-map}.
   */
  'egress-qos-map'?: string;
}