import { JSONSchemaType } from 'ajv';

import { EnableDisableToggle } from '../../../../common/constants/attribute-values';
import { SchemaIds }           from '../../../../common/constants/schemas';
import {
  IgmpVersions, MldVersions,
  MultiCastRouterOptions,
  VlanProtocols
}                              from '../add.constants';

import { LinkBridgeTypeOptions } from './bridge.interfaces';

export const LinkBridgeOptionsSchema: JSONSchemaType<LinkBridgeTypeOptions> = {
  $id                 : SchemaIds.LinkAddBridgeOptions,
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {
    ageing_time                  : {
      type    : 'number',
      minimum : 1,
      maximum : 1000000,
      nullable: true
    },
    group_fwd_mask               : {
      type    : 'number',
      minimum : 0,
      maximum : 65535,
      nullable: true
    },
    group_address                : {
      type     : 'string',
      minLength: 1,
      format   : 'mac',
      nullable : true
    },
    forward_delay                : {
      type    : 'number',
      minimum : 2,
      maximum : 30,
      nullable: true
    },
    hello_time                   : {
      type    : 'number',
      minimum : 1,
      maximum : 10,
      nullable: true
    },
    max_age                      : {
      type    : 'number',
      minimum : 6,
      maximum : 40,
      nullable: true
    },
    stp_state                    : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    priority                     : {
      type    : 'number',
      minimum : 0,
      maximum : 65535,
      nullable: true
    },
    vlan_filtering               : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    vlan_protocol                : {
      type    : 'string',
      enum    : Object.values(VlanProtocols) as VlanProtocols[],
      nullable: true
    },
    vlan_default_pvid            : {
      type    : 'number',
      minimum : 0,
      maximum : 4095,
      nullable: true
    },
    vlan_stats_enabled           : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    vlan_stats_per_port          : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    mcast_snooping               : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    mcast_router                 : {
      type    : 'number',
      enum    : Object.values(MultiCastRouterOptions) as MultiCastRouterOptions[],
      nullable: true
    },
    mcast_query_use_ifaddr       : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    mcast_querier                : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    mcast_hash_elasticity        : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_hash_max               : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_last_member_count      : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_last_member_interval   : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_startup_query_count    : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_startup_query_interval : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_membership_interval    : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_querier_interval       : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_query_interval         : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_query_response_interval: {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    mcast_stats_enabled          : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    mcast_igmp_version           : {
      type    : 'number',
      enum    : Object.values(IgmpVersions) as IgmpVersions[],
      nullable: true
    },
    mcast_mld_version            : {
      type    : 'number',
      enum    : Object.values(MldVersions) as MldVersions[],
      nullable: true
    },
    nf_call_iptables             : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    nf_call_ip6tables            : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    },
    nf_call_arptables            : {
      type    : 'number',
      enum    : Object.values(EnableDisableToggle) as EnableDisableToggle[],
      nullable: true
    }
  }
};