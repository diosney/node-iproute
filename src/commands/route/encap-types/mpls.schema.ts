import { JSONSchemaType } from 'ajv';

import { TtlSpecialValues } from '../../link.constants';
import { AddRouteMplsEncapArgs } from './mpls.interfaces';

export const RouteMplsEncapArgsSchema: JSONSchemaType<AddRouteMplsEncapArgs> = {
  type: 'object',
  nullable: true,
  required: ['label_'],
  properties: {
    label_: {
      type: ['boolean', 'string'],
      oneOf: [
        {
          type: 'string',
          format: 'slash-separated-numbers',
          minLength: 1
        },
        {
          type: 'boolean',
          enum: [true]
        }
      ]
    },
    ttl: {
      type: ['string', 'integer'],
      nullable: true,
      oneOf: [
        {
          type: 'string',
          enum: Object.values(TtlSpecialValues) as TtlSpecialValues[],
          nullable: true
        },
        {
          type: 'integer',
          minimum: 0,
          maximum: 255,
          nullable: true
        }
      ]
    }
  }
};