import { JSONSchemaType } from 'ajv';

import { SchemaIds }              from '../../../common/constants/schemas';
import { AddLinkBareudpTypeArgs } from './bareup.interfaces';

export const AddLinkBareudpArgsSchema: JSONSchemaType<AddLinkBareudpTypeArgs> = {
  $id                 : SchemaIds.LinkAddBareupOptions,
  type                : 'object',
  required            : ['dstport', 'ethertype'],
  additionalProperties: false,
  properties          : {
    dstport     : {
      type   : 'number',
      minimum: 1,
      maximum: 65535
    },
    ethertype   : {
      type : ['string', 'number'],
      oneOf: [
        {
          type: 'string'
        },
        {
          type   : 'number',
          minimum: 0,
          maximum: 255
        }
      ]
    },
    srcportmin  : {
      type    : 'number',
      nullable: true,
      minimum : 1,
      maximum : 65535
    },
    multiproto  : {
      type    : 'boolean',
      nullable: true
    },
    nomultiproto: {
      type    : 'boolean',
      nullable: true
    }
  }
};