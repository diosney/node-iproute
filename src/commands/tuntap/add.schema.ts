import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { TunTapTunnelAddOptions } from './add.interfaces';
import { TunTapTunnelModes } from '../tuntap.constants';

export const TunTapAddSchema: JSONSchemaType<TunTapTunnelAddOptions> = {
  $id       : SchemaIds.TunTapAdd,
  type      : 'object',
  required  : ['mode'],
  properties: {
    dev        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    mode       : {
      type: 'string',
      enum: Object.values(TunTapTunnelModes) as TunTapTunnelModes[]
    },
    user       : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type     : 'string',
          minLength: 1
        },
        {
          type   : 'integer',
          minimum: 0
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