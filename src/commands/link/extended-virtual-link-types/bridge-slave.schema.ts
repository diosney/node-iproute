import { JSONSchemaType } from 'ajv';
import { OnOffToggle }    from '../../../common/constants/attribute-values';

import { SchemaIds }                  from '../../../common/constants/schemas';
import { SetLinkBridgeSlaveTypeArgs } from './bridge-slave.interfaces';
import { BridgeSlavePortStates }      from '../../link.constants';

export const SetLinkBridgeSlaveArgsSchema: JSONSchemaType<SetLinkBridgeSlaveTypeArgs> = {
  $id                 : SchemaIds.LinkSetBridgeSlaveOptions,
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {
    fdb_flush       : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    state           : {
      type    : 'integer',
      enum    : Object.values(BridgeSlavePortStates) as BridgeSlavePortStates[],
      nullable: true
    },
    priority        : {
      type    : 'integer',
      minimum : 0,
      maximum : 63,
      nullable: true
    },
    cost            : {
      type    : 'integer',
      minimum : 1,
      maximum : 65535,
      nullable: true
    },
    guard           : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    hairpin         : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    fastleave       : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    root_block      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    learning        : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    flood           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    proxy_arp       : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    proxy_arp_wifi  : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    mcast_router    : {
      type    : 'integer',
      minimum : 0,
      maximum : 3,
      nullable: true
    },
    mcast_fast_leave: {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    mcast_flood     : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    mcast_to_unicast: {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    group_fwd_mask  : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    neigh_suppress  : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    vlan_tunnel     : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    isolated        : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    backup_port     : {
      type     : 'string',
      minLength: 0,
      nullable : true
    },
    nobackup_port   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};