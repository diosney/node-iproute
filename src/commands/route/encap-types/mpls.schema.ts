import { JSONSchemaType } from 'ajv';

import { SchemaIds }             from '../../../common/constants/schemas';
import { TtlSpecialValues }      from '../../link/add.constants';
import { AddRouteMplsEncapArgs } from './mpls.interfaces';

export const RouteMplsEncapArgsSchema: JSONSchemaType<AddRouteMplsEncapArgs> = {
  $id       : SchemaIds.RouteAddMplsEncapArgs,
  type      : 'object',
  required  : [],
  properties: {
    mpls: {
      type    : ['boolean', 'string'],
      default : true,
      nullable: true,
      oneOf   : [
        {
          type     : 'string',
          format   : 'slash-separated-strings',
          minLength: 1,
          nullable : true
        },
        {
          type    : 'boolean',
          enum    : [true],
          default : true,
          nullable: true
        }
      ]
    },
    ttl : {
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