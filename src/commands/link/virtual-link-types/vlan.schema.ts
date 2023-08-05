import { JSONSchemaType } from 'ajv';

import { OnOffToggle }   from '../../../common/constants/attribute-values';
import { VlanProtocols } from '../add.constants';
import { SchemaIds }     from '../../../common/constants/schemas';

import {
  AddLinkVlanTypeArgs
} from './vlan.interfaces';

export const AddLinkVlanArgsSchema: JSONSchemaType<AddLinkVlanTypeArgs> = {
  $id                 : SchemaIds.LinkAddVlanOptions,
  type                : 'object',
  required            : ['id'],
  additionalProperties: false,
  properties          : {
    protocol         : {
      type    : 'string',
      enum    : Object.values(VlanProtocols) as VlanProtocols[],
      nullable: true
    },
    id               : {
      type   : 'number',
      minimum: 0,
      maximum: 4095
    },
    reorder_hdr      : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    gvrp             : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    mvrp             : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    loose_binding    : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    bridge_binding   : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    'ingress-qos-map': {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    'egress-qos-map' : {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};