import { JSONSchemaType } from 'ajv';

import { TtlSpecialValues } from '../../link.constants';
import { AddRouteMplsEncapArgs } from './mpls.interfaces';

export const RouteMplsEncapArgsSchema: JSONSchemaType<AddRouteMplsEncapArgs> = {
  type: 'object',
  nullable: true,
  required: ['label'],
  properties: {
    label: {
      type: ['boolean', 'string'],
      keyless: true,
      oneOf: [
        {
          type: 'string',
          format: 'slash-separated-numbers',
          minLength: 1,
          keyless: true
        },
        {
          type: 'boolean',
          enum: [true],
          keyless: true
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