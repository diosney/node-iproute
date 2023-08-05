import { JSONSchemaType } from 'ajv';

import { VirtualLinkTypes }  from './add.constants';
import { SchemaIds }         from '../../common/constants/schemas';
import { LinkDeleteOptions } from './delete.interfaces';

export const LinkDeleteSchema: JSONSchemaType<LinkDeleteOptions> = {
  $id  : SchemaIds.LinkDelete,
  type : 'object',
  oneOf: [
    {
      type      : 'object',
      required  : ['dev'],
      properties: {
        dev : {
          type     : 'string',
          minLength: 1
        },
        type: {
          type    : 'string',
          enum    : Object.values(VirtualLinkTypes) as VirtualLinkTypes[],
          nullable: true
        }
      }
    },
    {
      type      : 'object',
      required  : ['group'],
      properties: {
        group: {
          type   : 'number',
          minimum: 0
        },
        type : {
          type    : 'string',
          enum    : Object.values(VirtualLinkTypes) as VirtualLinkTypes[],
          nullable: true
        }
      }
    }
  ]
};