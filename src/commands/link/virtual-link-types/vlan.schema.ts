import { JSONSchemaType } from 'ajv';

import { OnOffToggle }   from '../../../common/constants/attribute-values';
import { VlanProtocols } from '../../link.constants';
import { SchemaIds }     from '../../../common/constants/schemas';

import {
  AddLinkVlanTypeArgs
} from './vlan.interfaces';

export const AddLinkVlanArgsSchema: JSONSchemaType<AddLinkVlanTypeArgs> = {
  $id:                  SchemaIds.LinkAddVlanOptions,
  type:                 'object',
  required:             [ 'protocol', 'id' ],
  additionalProperties: false,
  properties:           {
    protocol:          {
      type: 'string',
      enum: Object.values(VlanProtocols) as VlanProtocols[]
    },
    id:                {
      type:    'integer',
      minimum: 0,
      maximum: 4095
    },
    reorder_hdr:       {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    gvrp:              {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    mvrp:              {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    loose_binding:     {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    bridge_binding:    {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    'ingress-qos-map': {
      type:     'array',
      minItems: 1,
      nullable: true,
      items:    {
        type:   'string',
        format: 'colon-separated-numbers'
      }
    },
    'egress-qos-map':  {
      type:     'array',
      minItems: 1,
      nullable: true,
      items:    {
        type:   'string',
        format: 'colon-separated-numbers'
      }
    }
  }
};