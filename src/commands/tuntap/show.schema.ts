import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { TunTapTunnelModes } from '../tuntap.constants';
import { TunTapTunnelShowOptions } from './show.interfaces';

export const TunTapShowSchema: JSONSchemaType<TunTapTunnelShowOptions> = {
  $id       : SchemaIds.TunTapShow,
  type      : 'object',
  required  : [],
  properties: {
    dev        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    mode       : {
      type    : 'string',
      enum    : Object.values(TunTapTunnelModes) as TunTapTunnelModes[],
      nullable: true
    },
    user       : {
      type    : ['string', 'integer'],
      nullable: true,
      anyOf   : [
        {
          type     : 'string',
          minLength: 1,
          nullable : true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    group      : {
      type    : ['string', 'integer'],
      nullable: true,
      anyOf   : [
        {
          type     : 'string',
          minLength: 1,
          nullable : true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    one_queue  : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    pi         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    vnet_hdr   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    multi_queue: {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    name       : {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};