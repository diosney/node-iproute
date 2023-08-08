import { JSONSchemaType } from 'ajv';

import { SchemaIds }           from '../../../common/constants/schemas';
import { TtlSpecialValues }    from '../../link/add.constants';
import { AddRouteIpEncapArgs } from './ip.interfaces';

export const RouteIpEncapArgsSchema: JSONSchemaType<AddRouteIpEncapArgs> = {
  $id       : SchemaIds.RouteAddIpEncapArgs,
  type      : 'object',
  required  : ['id', 'dst'],
  properties: {
    ip : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    id : {
      type   : 'number',
      minimum: 1
    },
    dst: {
      type  : 'string',
      format: 'ip-with-optional-mask'
    },
    src: {
      type    : 'string',
      format  : 'ip-with-optional-mask',
      nullable: true
    },
    tos: {
      type    : 'integer',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    ttl: {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(TtlSpecialValues) as TtlSpecialValues[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 255,
          nullable: true
        }
      ]
    }
  }
};