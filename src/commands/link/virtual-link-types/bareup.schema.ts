import { JSONSchemaType } from 'ajv';

import { AddLinkBareudpTypeArgs } from './bareup.interfaces';

export const AddLinkBareudpArgsSchema: JSONSchemaType<AddLinkBareudpTypeArgs> = {
  type: 'object',
  required: ['dstport', 'ethertype'],
  additionalProperties: false,
  properties: {
    dstport: {
      type: 'integer',
      minimum: 1,
      maximum: 65535
    },
    ethertype: {
      type: ['string', 'integer'],
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'integer',
          minimum: 0,
          maximum: 255
        }
      ]
    },
    srcportmin: {
      type: 'integer',
      nullable: true,
      minimum: 1,
      maximum: 65535
    },
    multiproto: {
      type: 'boolean',
      nullable: true
    },
    nomultiproto: {
      type: 'boolean',
      nullable: true
    }
  }
};